from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

# Load ML model and preprocessor
with open("model.pkl", "rb") as file:
    model = pickle.load(file)

with open("preprocessor.pkl", "rb") as file:
    preprocessor = pickle.load(file)

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Define feature names
feature_names = ['tenure', 'MonthlyCharges', 'TotalCharges', 'gender', 'Contract', 'PaymentMethod',
                 'PaperlessBilling', 'PhoneService', 'InternetService', 'OnlineSecurity', 'TechSupport']

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON request from frontend
        data = request.get_json()

        # Ensure all required features are in the input data
        missing_features = [feature for feature in feature_names if feature not in data]
        if missing_features:
            return jsonify({'error': f'Missing features: {missing_features}'}), 400

        # Convert input data to DataFrame
        input_df = pd.DataFrame([data], columns=feature_names)

        # Convert numerical values to float
        num_features = ['tenure', 'MonthlyCharges', 'TotalCharges']
        input_df[num_features] = input_df[num_features].astype(float)

        # Transform input data using the preprocessor
        transformed_input = preprocessor.transform(input_df)

        # Make prediction
        prediction = model.predict(transformed_input)
        prediction_proba = model.predict_proba(transformed_input)[:, 1]  # Probability of churn

        # Determine result based on prediction
        result = "Yes" if prediction[0] == 1 else "No"

        # Return prediction and probability as JSON response
        return jsonify({"prediction": result, "probability": round(float(prediction_proba[0]), 4)})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { FaPlay } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles for toast

const PredictForm = () => {
  const [formData, setFormData] = useState({
    tenure: "",
    MonthlyCharges: "",
    TotalCharges: "",
    gender: "",
    SeniorCitizen: "",
    Partner: "",
    Dependents: "",
    Contract: "",
    PaperlessBilling: "",
    PaymentMethod: "",
    PhoneService: "",
    InternetService: "",
    OnlineSecurity: "",
    TechSupport: "",
  });

  const [prediction, setPrediction] = useState("");
  const [probability, setProbability] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending POST request to Flask API
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );
      setPrediction(response.data.prediction); // Get prediction from API response
      setProbability(response.data.probability); // Get probability from API response
      setError("");

      // Show toast message for the prediction result
      toast.success(
        `Prediction: ${response.data.prediction} | Probability: ${response.data.probability}`,
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    } catch (err) {
      setError("Error in making prediction. Please try again.", err);
      setPrediction("");
      setProbability("");

      // Show toast message for error
      toast.error("Error in making prediction. Please try again.", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Telco Customer Churn Prediction</h2>

      {/* Form for User Input */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tenure:</label>
          <input
            type="number"
            name="tenure"
            placeholder="Enter tenure (Months)"
            value={formData.tenure}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Monthly Charges:</label>
          <input
            type="number"
            name="MonthlyCharges"
            placeholder="Enter monthly charges"
            value={formData.MonthlyCharges}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Total Charges:</label>
          <input
            type="number"
            name="TotalCharges"
            placeholder="Enter total charges"
            value={formData.TotalCharges}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Senior Citizen:</label>
          <select
            name="SeniorCitizen"
            value={formData.SeniorCitizen}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Partner:</label>
          <select
            name="Partner"
            value={formData.Partner}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Dependents:</label>
          <select
            name="Dependents"
            value={formData.Dependents}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phone Service:</label>
          <select
            name="PhoneService"
            value={formData.PhoneService}
            onChange={handleChange}
            required
          >
            <option value="">Select phone service</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Internet Service:</label>
          <select
            name="InternetService"
            value={formData.InternetService}
            onChange={handleChange}
            required
          >
            <option value="">Select internet service</option>
            <option value="DSL">DSL</option>
            <option value="Fiber optic">Fiber optic</option>
            <option value="No internet service">No internet service</option>
          </select>
        </div>
        <div className="form-group">
          <label>Online Security:</label>
          <select
            name="OnlineSecurity"
            value={formData.OnlineSecurity}
            onChange={handleChange}
            required
          >
            <option value="">Select online security</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="No internet service">No internet service</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tech Support:</label>
          <select
            name="TechSupport"
            value={formData.TechSupport}
            onChange={handleChange}
            required
          >
            <option value="">Select tech support</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="No internet service">No internet service</option>
          </select>
        </div>
        <div className="form-group">
          <label>Contract:</label>
          <select
            name="Contract"
            value={formData.Contract}
            onChange={handleChange}
            required
          >
            <option value="">Select contract</option>
            <option value="Month-to-month">Month-to-month</option>
            <option value="One year">One year</option>
            <option value="Two year">Two year</option>
          </select>
        </div>
        <div className="form-group">
          <label>Paperless Billing:</label>
          <select
            name="PaperlessBilling"
            value={formData.PaperlessBilling}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Payment Method:</label>
          <select
            name="PaymentMethod"
            value={formData.PaymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select payment method</option>
            <option value="Electronic check">Electronic check</option>
            <option value="Mailed check">Mailed check</option>
            <option value="Bank transfer (automatic)">
              Bank transfer (automatic)
            </option>
            <option value="Credit card (automatic)">
              Credit card (automatic)
            </option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          <FaPlay style={{ marginRight: "8px" }} /> Predict Churn
        </button>
        
        {/* Display bottom message with result */}
        {prediction && (
          <div className="prediction-result">
            <h3>Churn Prediction: {prediction}</h3>
            <p>Probability of Churn: {probability}</p>
          </div>
        )}
        {error && <h3 className="error">{error}</h3>}
      </form>

      {/* Toast container to show the toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default PredictForm;

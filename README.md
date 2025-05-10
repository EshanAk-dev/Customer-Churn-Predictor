# 📊 Customer Churn Prediction Web App

A web-based **machine learning application** that predicts the likelihood of customer churn based on historical data. Built with a **React frontend** and **Flask backend**, the model is trained using the **Telco Customer Churn dataset**.

---

## 🔍 Overview

This application allows businesses to:

* Upload customer data
* Receive churn predictions via a trained ML model
* Understand customer retention risks through model interpretation

Built to demonstrate practical ML deployment with a user-friendly interface and real-time inference.

---

## 🧰 Tech Stack

### 🎨 Frontend

* **React.js**
* **Axios** – For API requests
* **Tailwind CSS / Bootstrap** – (Optional) Styling

### 🧠 Backend

* **Python**
* **Flask** – For REST API
* **scikit-learn** – Machine learning model
* **pandas, NumPy** – Data preprocessing
* **pickle** – Model serialization

---

## 🧪 Machine Learning Details

* **Dataset**: Telco Customer Churn (from IBM Sample Datasets)
* **Target**: `Churn` (Yes/No)
* **Features**: Demographics, account info, service usage, contract details
* **Model Used**: Naïve Bayes
* **Metrics**: Accuracy, ROC-AUC, Precision, Recall

---

## ⚙️ Features

* Upload customer info via form
* Real-time churn prediction with probability score
* Explanation of predictions
* Responsive and clean UI
* Error handling and data validation

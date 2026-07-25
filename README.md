# 🧠 AI Mental Health Score Predictor

An AI-powered Mental Health Score Prediction web application built using **Machine Learning**, **FastAPI**, **Pydantic**, **HTML**, **CSS**, and **JavaScript**.

The application predicts a user's Mental Health Score based on their lifestyle, academic background, social media usage, and stress-related factors using a trained Machine Learning model.

---

## 🚀 Features

- 🤖 AI-powered Mental Health Score Prediction
- ⚡ FastAPI REST API Backend
- 📊 Machine Learning Prediction Pipeline
- 🎨 Modern Responsive User Interface
- 🔍 Input Validation using Pydantic
- 📱 Mobile-Friendly Design
- 🌙 Glassmorphism Dashboard UI
- 📈 Instant Prediction Results
- 💡 Personalized Wellness Recommendations

---

## 🌐 Live Demo

🚀 **Try the application here:**

**Website:** https://mental-health-score-1-8e6g.onrender.com

---


## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- FastAPI
- Pydantic
- Uvicorn

### Machine Learning

- Python
- Scikit-learn
- Pandas
- NumPy
- Joblib

---

## 📂 Project Structure

```
Mental-Health-Score-Predictor
│
├── app.py
├── Mental_Health_Model.pkl
├── requirements.txt
├── README.md
│
├── static
│   ├── style.css
│   └── script.js
│
├── templates
│   └── index.html
│
└── dataset
    └── mental_health_dataset.csv
```

---

## 📊 Input Features

The model predicts the Mental Health Score using the following features:

- Age
- Gender
- Grouped Country
- Academic Level
- Most Used Social Media Platform
- Purpose of Social Media Usage
- Average Daily Usage Hours
- Daily Unlocks
- Study Hours
- Physical Activity Hours
- Sleep Hours Per Night
- Stress Level

---

## 🎯 Output

The application predicts

- Mental Health Score

along with AI-generated recommendations based on the predicted score.

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/Mental-Health-Score-Predictor.git
```

Move into the project folder

```bash
cd Mental-Health-Score-Predictor
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the FastAPI server

```bash
uvicorn app:app --reload
```

Open your browser

```
http://127.0.0.1:8000
```

---

## 📌 API Endpoint

### Home

```
GET /
```

### Prediction

```
POST /predict
```

Example JSON Request

```json
{
    "Age":22,
    "Gender":"Male",
    "Grouped_country":"India",
    "Academic_Level":"Undergraduate",
    "Most_Used_Platform":"Instagram",
    "Purpose_Of_Use":"Education",
    "Avg_Daily_Usage_Hours":4.5,
    "Daily_Unlocks":60,
    "Study_Hours":6,
    "Physical_Activity_Hours":1.5,
    "Sleep_Hours_Per_Night":7,
    "Stress_Level":"Medium"
}
```

Example Response

```json
{
    "Predicted Mental Health Score":82.74
}
```

---

## 📈 Machine Learning Workflow

```
Dataset
      │
      ▼
Data Preprocessing
      │
      ▼
Feature Engineering
      │
      ▼
Pipeline
      │
      ▼
Model Training
      │
      ▼
Joblib Model (.pkl)
      │
      ▼
FastAPI Backend
      │
      ▼
Web Interface
```

---

## 💻 Future Improvements

- User Authentication
- Prediction History
- Interactive Charts
- Model Explainability
- Dark / Light Theme
- Docker Deployment
- Cloud Deployment

---

## 👨‍💻 Developer

**Md Salman Ali**

B.Tech Computer Science & Engineering (Data Science)

Jamia Millia Islamia

### Connect with Me

LinkedIn:
https://www.linkedin.com/in/md-salman-ali-8a301a324/

Email:
alisalmann7386@gmail.com

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates further development.

---

## 📄 License

This project is licensed under the MIT License.

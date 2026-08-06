from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import Request
from fastapi.responses import HTMLResponse

# Load trained pipeline
model = joblib.load("Mental_Health_Model.pkl")

app = FastAPI(
    title="Mental Health Score Predictor",
    description="Predict Mental Health Score using Machine Learning",
    version="1.0"
)

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(
    request=request,
    name="index.html"
    )
@app.get("/health")
def health():
    return {"Working"}
# ----------------------------
# Input Schema
# ----------------------------

class MentalHealthInput(BaseModel):
    Age: int
    Gender: str
    Grouped_country: str
    Academic_Level: str
    Most_Used_Platform: str
    Purpose_Of_Use: str
    Avg_Daily_Usage_Hours: float
    Daily_Unlocks: int
    Study_Hours: float
    Physical_Activity_Hours: float
    Sleep_Hours_Per_Night: float
    Stress_Level: str




# ----------------------------
# Prediction Route
# ----------------------------

@app.post("/predict")
def predict(data: MentalHealthInput):

    df = pd.DataFrame([data.model_dump()])

    prediction = model.predict(df)

    return {
        "Predicted Mental Health Score": float(prediction[0])
    }

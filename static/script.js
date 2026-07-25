const form = document.getElementById("predictionForm");

const resultCard = document.getElementById("result");

const prediction = document.getElementById("prediction");

const predictionTitle = document.getElementById("predictionTitle");

const predictionText = document.getElementById("predictionText");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    resultCard.style.display = "block";

    resultCard.scrollIntoView({
        behavior:"smooth"
    });

    prediction.innerHTML="...";
    predictionTitle.innerHTML="Analyzing";
    predictionText.innerHTML="🧠 AI is analyzing your lifestyle...";

    const data={

        Age:Number(document.getElementById("Age").value),

        Gender:document.getElementById("Gender").value,

        Grouped_country:document.getElementById("Grouped_country").value,

        Academic_Level:document.getElementById("Academic_Level").value,

        Most_Used_Platform:document.getElementById("Most_Used_Platform").value,

        Purpose_Of_Use:document.getElementById("Purpose_Of_Use").value,

        Avg_Daily_Usage_Hours:Number(document.getElementById("Avg_Daily_Usage_Hours").value),

        Daily_Unlocks:Number(document.getElementById("Daily_Unlocks").value),

        Study_Hours:Number(document.getElementById("Study_Hours").value),

        Physical_Activity_Hours:Number(document.getElementById("Physical_Activity_Hours").value),

        Sleep_Hours_Per_Night:Number(document.getElementById("Sleep_Hours_Per_Night").value),

        Stress_Level:document.getElementById("Stress_Level").value

    };

    try{

        const response=await fetch("https://mental-health-score-1-8e6g.onrender.com",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        if(!response.ok){

            throw new Error("Prediction Failed");

        }

        const result=await response.json();

        const score=result["Predicted Mental Health Score"];

        prediction.innerHTML=score.toFixed(2);

        if(score>=80){

            prediction.style.color="#00ff95";

            predictionTitle.innerHTML="😊 Excellent";

            predictionText.innerHTML=
            "Your mental health score is excellent. Maintain your healthy routine, continue exercising, sleeping well, and balancing your digital lifestyle.";

        }

        else if(score>=60){

            prediction.style.color="#7CFC00";

            predictionTitle.innerHTML="🙂 Good";

            predictionText.innerHTML=
            "Your mental health appears to be good. Small improvements in sleep and reducing social media usage can make it even better.";

        }

        else if(score>=40){

            prediction.style.color="#FFD700";

            predictionTitle.innerHTML="😐 Moderate";

            predictionText.innerHTML=
            "Your mental health score is moderate. Consider reducing screen time, improving sleep habits, and spending more time on physical activity.";

        }

        else{

            prediction.style.color="#ff4d4d";

            predictionTitle.innerHTML="⚠ Needs Attention";

            predictionText.innerHTML=
            "Your predicted score is low. Try limiting excessive social media use, maintaining regular sleep, exercising daily, and seeking professional support if needed.";

        }

    }

    catch(error){

        prediction.innerHTML="Error";

        prediction.style.color="#ff4d4d";

        predictionTitle.innerHTML="Prediction Failed";

        predictionText.innerHTML=
        "Unable to connect to the FastAPI server. Please ensure the backend is running.";

        console.log(error);

    }

});

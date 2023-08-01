
let start = document.querySelector("#start");
let h1El = document.querySelector("#question");
let h4El = document.querySelector("h4")
let finalMessage = document.querySelector("#finalMessage");
let correctAnswer = document.querySelector('#correct');
let wrongAnswer = document.querySelector('#incorrect');
let quizDiv = document.querySelector("#quiz");
let time = 60;
let score = 0;
let currentQuestion = 0;
let initScore = document.querySelector("#initScore");



// let highScores = JSON.parse(localStorage.getItem("highScores")) || [];


let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");


let questions = [{question: "How are you?", 
                answers: ["Great", "OK", "Not great", "Terrible"], correctAnswer: "Great" },
                {question: "Who were you yesterday?", 
                answers: ["Great", "OK", "Not great", "Terrible"], correctAnswer: "Great" },
                {question: "How are you?", 
                answers: ["Great", "OK", "Not great", "Terrible"], correctAnswer: "Great" },
                {question: "Who are you?", 
                answers: ["Great", "OK", "Not great", "Terrible"], correctAnswer: "Great" },
                {question: "Where are you?", 
                answers: ["Great", "OK", "Not great", "Terrible"], correctAnswer: "Great" }
]


start.addEventListener("click", function() {
    
    let countdown = setInterval(function(){

        time = time-=1;
        h4El.textContent = "Time Remaining: " + time;
    
        if (time === 0) {
            clearInterval(countdown);
            quizDiv.style.display = 'none';
            finalScore.style.display = 'flex';
            finalMessage.textContent = "Time is up! Your score is " + score + ". Please enter your initials below";
        } 
    
    }, 1000)
    
    start.style.display = 'none';
    renderQuestion();
    quizDiv.style.display = 'flex';
    
})



function renderQuestion() {


h1El.textContent = questions[currentQuestion].question
questionButton1.textContent = questions[currentQuestion].answers[0]
questionButton2.textContent = questions[currentQuestion].answers[1]
questionButton3.textContent = questions[currentQuestion].answers[2]
questionButton4.textContent = questions[currentQuestion].answers[3]



}


quizDiv.addEventListener("click", function(event){

    if(event.target.matches("button")) {

        if(event.target.textContent === questions[currentQuestion].correctAnswer) {
            correctAnswer.textContent = "Correct!";
            score += 1;
        } else {
            wrongAnswer.textContent = "Incorrect. 10 seconds will be deducted from the clock.";         
            time -= 10;
        }


        currentQuestion++

        
        if (currentQuestion >= questions.length-1) {
            quizDiv.style.display = 'none';
            finalScore.style.display = 'flex';
        }

    renderQuestion();
    
    } 
    quizEnd();
})

    function quizEnd() {    

     
        finalMessage.textContent = "All done! Your score is " + score + ". Please enter your initials below";

        localStorage.setItem("score", score);
    }

   
finalScore.addEventListener("click", function(event) {
    let initials = document.querySelector("#initBox").value;
    localStorage.setItem("initials", initials);
})



//localStorage.setItem("highScores", JSON.stringify([{"initials": "dre", "score": 80}]))

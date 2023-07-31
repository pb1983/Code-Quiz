
let start = document.querySelector("#start");

let h1El = document.querySelector("#question");
let h4El = document.querySelector("h4")

let quizDiv = document.querySelector("#quiz");

let time = 90;
let score = 0;

let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");

let finalScore = document.querySelector("#finalScore");

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

let answer1 = "Great";


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


let currentQuestion = 0;


start.addEventListener("click", function() {
    
    let countdown = setInterval(function(){

        time = time-=1;
        h4El.textContent = "Time Remaining: " + time;
    
        if (time === 0) {
            clearInterval(countdown);
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


console.log(event.target);

    if(event.target.matches("button")) {

        if(event.target.textContent === questions[currentQuestion].correctAnswer) {
            console.log("User chose correct answer");
        } else {
            console.log("Wrong Answer")           
            time -= 10;
        }

        
        currentQuestion++
        console.log("on question: ", currentQuestion, "is quiz over: ", currentQuestion >= questions.length-1)
        if (currentQuestion >= questions.length-1) {
            quizDiv.style.display = 'none';
            finalScore.style.display = 'flex';
        }
    renderQuestion();
    } 

    
    
})



//put JSON.stringify in the button that saves the score and player initials
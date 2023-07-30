
let h1El = document.querySelector("#question");

let quizDiv = document.querySelector("#quiz");


let time = 90;

let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

let timerID = setInterval(function(){

    time = time-=1;

}, 1000)

//call clearInterval(timerID) when quiz is over

let questions = [{question: "How are you?", answers: ["Great", "OK", "Not great", "Terrible"], correctAnswer: "Great" },
                {question: "Who were you yesterday?", answers: ["Great", "OK", "Not great", "Terrible"], correctAnswer: "Great" }
]

let currentQuestion = 0;

renderQuestion();


function renderQuestion() {


h1El.textContent = questions[currentQuestion].question
questionButton1.textContent = questions[currentQuestion].answers[0]
questionButton2.textContent = questions[currentQuestion].answers[1]
questionButton3.textContent = questions[currentQuestion].answers[2]
questionButton4.textContent = questions[currentQuestion].answers[3]


}


quizDiv.addEventListener("click", function(event){
    if(event.target.matches("button")){
        console.log("click!");
        currentQuestion++
        renderQuestion();
    }
})

//put JSON.stringify in the button that saves the score and player initials
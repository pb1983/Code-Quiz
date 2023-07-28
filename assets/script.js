let quizDiv = document.querySelector("#quiz");

let time = 90;

let questionButton1 = document.querySelector("answer1");


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



questions[currentQuestion].question
questionButton1.textContent = questions[currentQuestion].answers[0]
questions[currentQuestion].answers[1]
questions[currentQuestion].answers[2]
questions[currentQuestion].answers[3]

questions[currentQuestion].answers[0]
questions[currentQuestion].answers[1]
questions[currentQuestion].answers[2]
questions[currentQuestion].answers[3]
console.log("correct answer:" + questions[currentQuestion].correctAnswer);

}


quizDiv.addEventListener("click", function(event){
    if(event.target.matches("button")){
        console.log("click!")

        currentQuestion++
        RenderQuestion();
    }
})

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



let highScores = JSON.parse(localStorage.getItem("highScores")) || [];


let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");

//Questions

let questions = [{question: "Which language styles the webpage?", 
                answers: ["HTML", "CSS", "Javascript", "Python"], correctAnswer: "CSS" },
                {question: "Each .html file starts with which declaration?", 
                answers: ["Head", "Body", "!DOCTYPE", "DOM"], correctAnswer: "!DOCTYPE" },
                {question: "Which of the following is not a basic programming language for front-end web development?", 
                answers: ["HTML", "CSS", "C#", "Javascript"], correctAnswer: "C#" },
                {question: "A Javascript ID can be identified by which character?", 
                answers: ["#", "&", ".", "$"], correctAnswer: "#" },
                {question: "Git is an example of what kind of application?", 
                answers: ["text editor", "web browser", "version control system", "API"], correctAnswer: "version control system" },
                {question: "", 
                answers: [""], correctAnswer: "" }
                
]

//Starts quiz and timer

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

//Records answers and advances to the section where scores are displayed and initials are logged. 

quizDiv.addEventListener("click", function(event){

    if(event.target.matches("button")) {

        if(event.target.textContent === questions[currentQuestion].correctAnswer) {
            correctAnswer.textContent = "Correct!";
            wrongAnswer.textContent = "";
            score += 1;
        } else {
            wrongAnswer.textContent = "Incorrect. 10 seconds will be deducted from the clock.";       
            correctAnswer.textContent = "";  
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


//Notifies user of their score and asks for their initials. 

    function quizEnd() {    

     
        finalMessage.textContent = "All done! Your score is " + score + ". Please enter your initials below";

        localStorage.setItem("score", score);
    }

   
finalScore.addEventListener("click", function(event) {


    if (event.target.matches("#initScore")) {
    let initials = document.querySelector("#initBox").value;
    localStorage.setItem("initials", initials);

    highScores.push({initials, score})
    localStorage.setItem("highScores",JSON.stringify(highScores))
    }
})




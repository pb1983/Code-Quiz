
let addName = document.querySelector('#leaders');
let scoreboard  = JSON.parse(localStorage.getItem("highScores"));  
let clearScores = document.querySelector("#clear");


//Pulls scores and initials from Local Sorage and puts them in an ordered list.  

function scoreHolders() {



          for (let i = 0; i < scoreboard.length; i++) {
            let newLi = document.createElement("li");
                newLi.textContent = scoreboard[i].initials + " - " + scoreboard[i].score;
                addName.appendChild(newLi);
            }
            
            
        }
        
        scoreHolders();

//Removes text content from ordered list and clears Local Storage when 'clear all scores' button is selected

clearScores.addEventListener ("click", function(event) {
    if (event.target.matches("#clear")) {
        addName.textContent = null;
        localStorage.clear();
    }
})


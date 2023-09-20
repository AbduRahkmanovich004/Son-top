'use strict';
// varebles
let isEnglish = true;
let score = 20;
let highscore = 0;
let kompNum = Math.floor(Math.random()*20+1)
let guessGlobal
let stop = false
let dict={
    // for varrebilyty
    "👇 To Hight !": "👇 Balandroq !", 
    "👆 Too Low !": "👆 Pastroq !",
    "You are find 🧠":"Topdingiz 🧠",
    "You are lose  🤦‍♂️🤦‍♀️": "Topolmadingiz  🤦‍♂️🤦‍♀️",
    // for again
    'Start guessing...':'Oylashni boshla ...',
}
// useses functions
const lang = () => {
    if(score<1){
        document.querySelector(".message").textContent = (isEnglish) ? "You lose  🤦‍♂️🤦‍♀️" : dict["You are lose  🤦‍♂️🤦‍♀️"];     
    }
    else if (guessGlobal == kompNum){
        document.querySelector(".message").textContent = (isEnglish) ? "You find 🧠" : dict["You are find 🧠"];
    }
    else if(guessGlobal != kompNum){
        if (guessGlobal<kompNum) document.querySelector(".message").textContent = (isEnglish) ? "👆 Too Low !" : dict["👆 Too Low !"]  ;
        else  document.querySelector(".message").textContent = (isEnglish) ? "👇 To Hight !" : dict["👇 To Hight !"]  ;
    }
}

const basiclyLang = ()=> {
    document.querySelector('.again').textContent = (isEnglish) ? 'Again!' : 'Yangi oyin';
    document.querySelector('h1').textContent = (isEnglish) ? 'Guess My Number!' : 'Men oylagan sonni top';
    document.querySelector('.between').textContent = (isEnglish) ? '(Between 1 and 20)' : '(1 va 20 oraligida)';
    document.querySelector('.check').textContent = (isEnglish) ? 'Check!' : 'Tekshirish';
    document.querySelector('.label-score').innerHTML = (isEnglish) ? `💯 Score: <span class="score">${score}</span>` : `💯 Urinish: <span class="score">${score}</span>`;
    document.querySelector(".label-highscore").innerHTML=(isEnglish) ? `🥇 Highscore: <span class="highscore">${highscore}</span>` : `🥇 Rekordlar: <span class="highscore">${highscore}</span>`;
    if(score==20 && !document.querySelector('.message').textContent.includes("🧠")) document.querySelector('.message').textContent = (isEnglish) ? 'Start guessing...' : "O'yinni boshlash"; 
    else lang()
    // alert(score)
}

// for lang
document.querySelector('.eng').addEventListener('click', function () {
    isEnglish=true
   basiclyLang();
  });
document.querySelector('.uz').addEventListener('click', function () {
    isEnglish=false
    basiclyLang();
  });
    //   basicly part
document.querySelector(".check").addEventListener("click", ()=>{
    let guess = +document.querySelector(".guess").value 
    guessGlobal=guess
    // alert(kompNum)
    if(score<1){
        document.querySelector(".message").textContent = (isEnglish) ? "You lose  🤦‍♂️🤦‍♀️" : dict["You are lose  🤦‍♂️🤦‍♀️"];     
    }
    else if (guess == kompNum || stop){
        document.querySelector(".message").textContent = (isEnglish) ? "You find 🧠" : dict["You are find 🧠"];
        if(highscore<score) highscore = score
        document.querySelector("body").style.backgroundColor="green"
        let stop = true
        document.querySelector(".number").textContent = guess
    }
    else if(guess != kompNum){
        if (!stop) {
            if (guess<kompNum) document.querySelector(".message").textContent = (isEnglish) ? "👆 Too Low !" : dict["👆 Too Low !"]  ;
            else  document.querySelector(".message").textContent = (isEnglish) ? "👇 To Hight !" : dict["👇 To Hight !"]  ;
            score--
        }
    }
    document.querySelector(".label-highscore").innerHTML=(isEnglish) ? `🥇 Highscore: <span class="highscore">${highscore}</span>` : `🥇 Rekordlar: <span class="highscore">${highscore}</span>`;
    document.querySelector('.label-score').innerHTML = (isEnglish) ? `💯 Score: <span class="score">${score}</span>` : `💯 Urinish: <span class="score">${score}</span>`;
})
document.querySelector(".again").addEventListener("click",()=>{
    document.querySelector(".guess").value = ""
    score=20
    stop = false
    document.querySelector(".number").textContent = "?"
    kompNum = Math.floor(Math.random()*20+1);
    document.querySelector(".label-highscore").innerHTML=`🥇 Highscore: <span class="highscore">${highscore}</span>`;
    document.querySelector('.label-score').innerHTML = `💯 Score: <span class="score">${score}</span>`;
    document.querySelector('.message').textContent = (isEnglish) ? 'Start guessing...' : dict['Start guessing...'];
    document.querySelector("body").style.backgroundColor="#222"
})
  
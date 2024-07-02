let gameseq=[];
let userseq=[];

let btns=["green","red","yellow","blue"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" ,function(){
     if(started==false){
          console.log("game started");
          started=true;
     }
     levelUp();
})

function levelUp(){
     userseq=[];

     level++;
     h2.innerText=`level ${level}`;

     let randInd = Math.floor(Math.random()*4);
     let randcolor = btns[randInd];
     let randBtn = document.querySelector(`.${randcolor}`)

     // console.log(randBtn);
     // console.log(randInd);
     // console.log(randcolor);

     gameseq.push(randcolor);
     console.log(gameseq);

     btnFlash(randBtn);
}

function btnFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
          btn.classList.remove("flash");
     },300);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
     btn.addEventListener("click",btnpress);
}

function btnpress(){
     console.log(this)
     let btn = this;
     btnFlash(btn);

     usercolor = btn.getAttribute("id");
     console.log(usercolor);
     userseq.push(usercolor);

     checkAns(userseq.length-1);
}

function checkAns(idx){
     console.log("curr leve : ",level);
     
     if(userseq[idx]===gameseq[idx]){
          console.log("same value")
          
          if(userseq.length == gameseq.length){
               setTimeout(levelUp,1000)
          }
     }
     else{
          h2.innerHTML=`game over! Your score was <b>${level}</b> <br> press any key`;

          document.querySelector("body").style.backgroundImage=url(images.jpg);
          setTimeout(function(){
               document.querySelector("body").style.backgroundImage=url(bcg.jpg);
          },250);

          reset();
     }
}

function reset(){
     started = false;

     gameseq=[];
     userseq=[];
     level=0;
}

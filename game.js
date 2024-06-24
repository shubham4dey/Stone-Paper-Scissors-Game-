let userScore =0 ;
let compScore = 0 ;
let output = document.querySelectorAll(".pic");
let outputsecond = document.querySelectorAll("#msg");

let  a = document.querySelector("#your-score");
let b = document.querySelector("#comp-score");

let drawgame = () => {
console.log("draw");
msg.innerText = "draw";
}

let showwinner = (result) =>{
    if(result){
        userScore++;
        a.innerText = userScore;
        console.log("you win");
        msg.innerText = "you win";
    }else{
        compScore++;
        b.innerText = compScore
        console.log("you loose");
        msg.innerText = "you loose";
    }
}

let playgame = (userId) =>{
    console.log("userId :",userId);
   
    
    let compuser = compid();
        console.log ("compId :",compuser);


        if (userId===compuser){
            drawgame();
        }else{
            let result = true;
            if ( userId ==="rock"){
                result=  compuser ==="paper"? false : true;
            }else if(userId ==="paper") {
                result = compuser === "rock" ? true :false;

            }else{
                result =  compuser === "scissors" ? false:true;
            }
            showwinner(result) ;
        }
    }
    
    let compid = () =>{
        let options = ["rock","paper","scissors"];
        let ranIdx = Math.floor(Math.random()*3);
        return options[ranIdx];
    }



output.forEach((pic) =>{
    pic.addEventListener("click",() =>{
        let userId = pic.getAttribute("id");

   playgame(userId);
    }
    
    );
});


let p1 = null
let p2 = null
let win 

function Choose(event){
   

    let scoresMulti = document.getElementById("scoresMulti").innerHTML
    let wordsScMulti = scoresMulti.split(" ")
    let p1Sc = parseInt(wordsScMulti[1]);
    let p2Sc = parseInt(wordsScMulti[3]);

    let key = event.key

    if (key == "a"){
        p1 = "paper"
    } else if (key == "s"){
        p1 = "rock"
    } else if (key == "d"){
        p1 = "scissors"
    }else if (key == "ArrowLeft"){
        p2 = "paper"
    } else if (key == "ArrowDown"){
        p2 = "rock"
    } else if (key == "ArrowRight"){
        p2 = "scissors"
    }
    
    if(p1 && p2){
        
        if (p1 == p2 ){
            console.log("draw")
            win = "draw"

        }
        else if (p1=="paper" && p2=="rock" ){
            
            win = "p1"
            console.log("p1")
            p1Sc++

        }
        else if (p1 == "rock" && p2 == "scissors" ){
            
            win = "p1"
            console.log("p1")
            p1Sc++

        }
    
        else if (p1=="scissors" && p2=="paper" ){
           
            win = "p1" 
            console.log("p1")
            p1Sc++

        }
        else if (p2=="paper" && p1=="rock" ){
           
            win = "p2"
            console.log("p2")
            p2Sc++

        }
        else if (p2 == "rock" && p1 == "scissors" ){
            
            win = "p2"
            console.log("p2")
            p2Sc++

        }
    
        else if (p2=="scissors" && p1=="paper" ){
           
            win = "p2" 
            console.log("p2")
            p2Sc++
              
        }

        document.getElementById("chose").innerHTML = "player 1 chose " + p1 + " and player two chose " + p2
        p1 = null
        p2 = null
    }

    switch(win){
        case "p1":
            document.getElementById("whoWonMulti").innerHTML = "Player One Won "
            document.getElementById("whoWonMulti").style.color = "green";
            break
        case "p2":
            document.getElementById("whoWonMulti").innerHTML = "Player Two Won"
            document.getElementById("whoWonMulti").style.color = "red";
            break 
        case "draw":
            document.getElementById("whoWonMulti").innerHTML = "Draw"
            document.getElementById("whoWonMulti").style.color = "white";
            break 
        default :
            document.getElementById("whoWonMulti").innerHTML = "Start"
            document.getElementById("whoWonMulti").style.color = "white";

    }

    document.getElementById("scoresMulti").innerHTML = wordsScMulti[0] + " " + p1Sc  + " " + wordsScMulti[2] + " " + p2Sc + " " + wordsScMulti[4]
}


document.onkeydown = (event) => {
        Choose(event)
        console.log(p1 , p2)
    
}


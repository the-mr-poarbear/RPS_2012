

function Play(){
    document.getElementById("startBtn").innerHTML = "Play Again"
    let paper = document.getElementById("paper"); 
    let scissors = document.getElementById("scissors"); 
    let rock = document.getElementById("rock"); 
    
    
    let scores = document.getElementById("scores").innerHTML
    let wordsSc = scores.split(" ")
    let you = parseInt(wordsSc[1]);
    let comp = parseInt(wordsSc[4]);
    let win 

    computerChose = Math.floor(Math.random() * 3);
    console.log(computerChose)
    console.log("pap", paper.checked)
    console.log("roc", rock.checked)
    console.log("sci", scissors.checked)

    if (paper.checked && computerChose == 0 ){
        console.log("gi")
        win = "draw"
    }
    else if (scissors.checked && computerChose == 0 ){
        you++;
        win = "you"
    }
    else if (rock.checked && computerChose == 0 ){
        console.log("kir")
        comp++
        win = "comp"
    }

    else if (paper.checked && computerChose == 1 ){
        you++;
        win = "you"
        
    }
    else if (scissors.checked && computerChose == 1 ){
        comp++
        win = "comp"
    }
    else if (rock.checked && computerChose == 1 ){
        win = "draw"
    }


    else if (paper.checked && computerChose == 2 ){
        comp++
        win = "comp"
        console.log("paper , sccissor")
    }
    else if (scissors.checked && computerChose == 2 ){
        win = "draw"
    }
    else if (rock.checked && computerChose == 2 ){
        you++;
        win = "you"
    }

    switch(computerChose){
        case 0 :
            document.getElementById("compChose").innerHTML = "computer chose paper"
            break 
        case 1 :
            document.getElementById("compChose").innerHTML = "computer chose rock"
            break
        case 2 :
            document.getElementById("compChose").innerHTML = "computer chose scissors"
            break
        default : "your turn"

    }

    switch(win){
        case "you":
            document.getElementById("whoWon").innerHTML = "You Win"
            document.getElementById("whoWon").style.color = "green";
            break
        case "comp":
            document.getElementById("whoWon").innerHTML = "You Lost"
            document.getElementById("whoWon").style.color = "red";
            break 
        case "draw":
            document.getElementById("whoWon").innerHTML = "Draw"
            document.getElementById("whoWon").style.color = "white";
            break 
        default :
            document.getElementById("whoWon").innerHTML = "Rock Paper Scissors"
            document.getElementById("whoWon").style.color = "white";

    }
    
    document.getElementById("scores").innerHTML = wordsSc[0] + " " + you  + " " + wordsSc[2] + " " + wordsSc[3] + " " + comp
}

document.getElementById("startBtn").onclick = Play;


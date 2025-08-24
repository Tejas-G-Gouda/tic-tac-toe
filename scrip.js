let boxes = document.querySelectorAll("#box");
let themeBtn = document.querySelector("#change_theme");
let resetBtn = document.querySelector("#reset-button");
let Showturn = document.querySelector(".Show-turn")
let turnDisplay = document.querySelector(".turn-display");
let Xcount = document.querySelector(".X-count");
let Ocount = document.querySelector(".O-count");
let newgame = document.querySelector("#newgame");
let NOwinner = document.querySelector(".NOwinner");
let winnerX = document.querySelector(".winnerX");
let winnerO = document.querySelector(".winnerO");
let themeButtons = document.querySelector(".theme_buttons");

let theme1 = document.querySelector(".theme1");
let theme2 = document.querySelector(".theme2");
let theme3 = document.querySelector(".theme3");
let theme4 = document.querySelector(".theme4");
let theme5 = document.querySelector(".theme5");

let C1 = document.querySelector(".C1");
let C2 = document.querySelectorAll(".C2");
let C3= document.querySelectorAll(".C3");
let C4 = document.querySelectorAll(".C4");

let turnO = false;
let firstTurnO = false;   // false = X starts, true = O starts

const winPartterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];



newgame.addEventListener("click", () => {
    resetGame();
    Xcount.innerText = 0;
    Ocount.innerText = 0;
});





const showWinner = (winner) => {
    turnDisplay.style.display = "none";
    disableBoxes()
    if (winner === "X") {
        Xcount.innerText++;
        winnerX.style.display = "block";
    }
    else {
        Ocount.innerText++;
        winnerO.style.display = "block";
    }
}

const checkWinner = () => {
    for (let pattern of winPartterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
                return true;
            }
        }
    }
    return false;
}




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            Showturn.innerText = "X"
            turnO = false;
        } else {
            box.innerText = "X";
            Showturn.innerText = "O"
            turnO = true;
        }
        box.disabled = true;
        if (!(checkWinner())) {
            checkDraw();
        }
    })
});



const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const checkDraw = () => {
    let allFilled = true;
    boxes.forEach(box => {
        if (box.innerText === "") allFilled = false;
    });
    if (allFilled) {
        disableBoxes();
        if (!(checkWinner())) {
            turnDisplay.style.display = "none";
            NOwinner.style.display = "block";
        }
    }
}


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
    turnDisplay.style.display = "block";
    NOwinner.style.display = "none";
    winnerO.style.display = "none";
    winnerX.style.display = "none";
}

const resetGame = () => {
    firstTurnO =!firstTurnO;
    turnO = firstTurnO ;
    Showturn.innerText = turnO ? "O" : "X";
    enableBoxes();
}
resetBtn.addEventListener("click", resetGame);



const showThemes = () =>{
    if(themeButtons.style.display === "none" ){
    themeButtons.style.display = "flex"; 
    }else{
        themeButtons.style.display = "none"; 
    }
};
themeBtn.addEventListener("click", showThemes);



const clickTheme1 = () => {
    C1.style.backgroundColor = "#4c5760";
    C2.forEach(c2 =>{
        c2.style.backgroundColor = "#93a8ac";
    })
    C3.forEach(c3 =>{
        c3.style.backgroundColor = "#b0423eca";
    }); 
    C4.forEach(c4 =>{
        c4.style.backgroundColor = "#A59e8c";
    })
};
theme1.addEventListener("click", clickTheme1);


const clickTheme2 = () => {
    C1.style.backgroundColor = "#324d6f";
    C2.forEach(c2 =>{
        c2.style.backgroundColor = "rgb(159, 194, 210)";
    })
    C3.forEach(c3 =>{
        c3.style.backgroundColor = "#d97446";
    }); 
    C4.forEach(c4 =>{
        c4.style.backgroundColor = "rgb(129, 128, 95)";
    })
};
theme2.addEventListener("click", clickTheme2);



const clickTheme3 = () => {
    C1.style.backgroundColor = "#3a4a58";
    C2.forEach(c2 =>{
        c2.style.backgroundColor = "#c1c9cf";
    })
    C3.forEach(c3 =>{
        c3.style.backgroundColor = "#8b8c7c";
    }); 
    C4.forEach(c4 =>{
        c4.style.backgroundColor = "#5f7566";
    })
};
theme3.addEventListener("click", clickTheme3);



const clickTheme4 = () => {
    C1.style.backgroundColor = "#5d4f45ef";
    C2.forEach(c2 =>{
        c2.style.backgroundColor = "#c9c2b4";
    })
    C3.forEach(c3 =>{
        c3.style.backgroundColor = "#ab6e45";
    }); 
    C4.forEach(c4 =>{
        c4.style.backgroundColor = "#9c8973";
    })
};
theme4.addEventListener("click", clickTheme4);


const clickTheme5 = () => {
    C1.style.backgroundColor = "#63665a ";
    C2.forEach(c2 =>{
        c2.style.backgroundColor = "#d3d1c4";
    })
    C3.forEach(c3 =>{
        c3.style.backgroundColor = "#9f7265";
    }); 
    C4.forEach(c4 =>{
        c4.style.backgroundColor = "#7e7f8a";
    })
};
theme5.addEventListener("click", clickTheme5);


let boxes = document.querySelectorAll(".box"); 
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true ;

const winPatters = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn = true ;
    enableBoxes() ;
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if( turn ){
            box.innerText = "O";
            box.style.color = "green" ;
            turn = false ;
        }
        else {
            box.innerText = "X"
            turn = true ;
        }
        box.disabled = true ;
        checkWinner() ;
    });
});

const disableBoxes = () => {
    for( let box of boxes){
        box.disabled = true ;
    }
};

const enableBoxes = () => {
    for( let box of boxes){
        box.disabled = false ;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS, WINNER IS ${winner}`;
    msgContainer.classList.remove("hide") ;
    disableBoxes() ;
}

const checkWinner = () => {
    for( let pattern of winPatters ){
        let pos1 = boxes[pattern[0]].innerText ;
        let pos2 = boxes[pattern[1]].innerText ;
        let pos3 = boxes[pattern[2]].innerText ;
        if( pos1!= "" && pos2!= "" && pos3!= ""){
            if( pos1 === pos2 && pos2 === pos3 ){
                showWinner(pos1);
            }
        } 
    }
};

newGameBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click",resetGame) ;
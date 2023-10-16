document.addEventListener("DOMContentLoaded", function() {
    createBoard(32);
    getSize();
    console.log("hi");
})

function createBoard(size){
    let board = document.querySelector(".grid");
    board.style.gridTemplateColumns = `repeat(16, 1fr)`;
    board.style.gridTemplateRows = `repeat(16, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Size of the board? 1-100");
    let message = document.querySelector("#message");
    if(input == ""){
        message.textContent = "Please provide a number";
    }
    else if(input < 0 || input > 100) {
        message.textContent = "Provide a number between 1 and 100";
    }
    else {
        message.textContent = "Draw!!";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    createBoard(32);
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
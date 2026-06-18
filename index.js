const container= document.querySelector("#container")
const resizeBtn=document.querySelector('#resize-btn')
const resetBtn=document.querySelector('#reset-btn')



resizeBtn.addEventListener("click", () => {
    let userInput = prompt("How many squares per side? (Max 100)");
    let newSize = parseInt(userInput);
    if (newSize > 0 && newSize <= 100) {
        // If valid, generate the new grid!
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100!");
    }
});

resetBtn.addEventListener('click',()=>{
    const squares= document.querySelectorAll(".square");
    squares.forEach((square)=>{square.style.backgroundColor="white"})
})

function createGrid(size){
    container.innerHTML=''
    const totalSquares= size*size;
    for(let i=0; i<totalSquares; i++){
        const square=document.createElement('div');
        square.classList.add("square");
        square.style.flexBasis = `calc(100% / ${size})`; 
        square.addEventListener('mouseenter',(e)=>{
        e.target.style.backgroundColor="black";
       })
        container.append(square);
    }
}
createGrid(16);
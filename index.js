const container= document.querySelector("#container")
const resizeBtn=document.querySelector('#resize-btn')
const resetBtn=document.querySelector('#reset-btn')
const colorArray=['#0E1848', '#485699','#6D8AB1']



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
    squares.forEach((square)=>{square.style.backgroundColor="#ECE1CD"})
})

function createGrid(size){
    container.innerHTML=''
    const totalSquares= size*size;
    for(let i=0; i<totalSquares; i++){
        const square=document.createElement('div');
        square.classList.add("square");
        square.dataset.interactions = 0;
        square.style.flexBasis = `calc(100% / ${size})`; 
        square.addEventListener('mouseenter',(e)=>{
        let interactions = parseInt(e.target.dataset.interactions);
        if (interactions === 0) {
            // Pick a random index (0, 1, or 2) and apply the color
            const randomNum = Math.floor(Math.random() * colorArray.length);
            e.target.style.backgroundColor = colorArray[randomNum];
            
            // Start the opacity at 10% (0.1) and update the memory to 1
            e.target.style.opacity = 0.1;
            e.target.dataset.interactions = 1;
        }
        else if (interactions < 10) {
        // Increase the count by 1
        interactions++;
        
        // Calculate new opacity (e.g., 2 becomes 0.2, 5 becomes 0.5)
        e.target.style.opacity = interactions / 10;
        
        // Save the new count back to the square's memory
        e.target.dataset.interactions = interactions;
        }
       })
        container.append(square);
    }
}
createGrid(16);
const cells=document.querySelectorAll('.cell');
const reset=document.getElementById('restart-button');

let currentPlayer='X';
let filledCells=0;
let gameOver=false;
const winningCombinations=[
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]
cells.forEach(cell=>{
  cell.addEventListener('click',function(){
    
    makeMove(cell);
    checkWinner();
  })
})
function makeMove(cell){
  if(gameOver){
    return;
  }
  if(cell.textContent===''){
    cell.textContent=currentPlayer;
    
  }

  currentPlayer=currentPlayer==='X'?'O':'X';
  filledCells++;
}
function checkWinner(){
  for(const combination of winningCombinations){
    const [a,b,c]=combination;
    if(cells[a].textContent===cells[b].textContent && cells[a].textContent===cells[c].textContent && cells[a].textContent!==''){
      alert('Player '+cells[a].textContent+' wins!');
      gameOver=true;
    }else if(filledCells===9){
      alert('It\'s a draw!');
    }
  }
}

reset.addEventListener('click',function(){
  cells.forEach(cell=>{
    cell.textContent='';
  })
  currentPlayer='X';
  gameOver=false; 
  filledCells=0;
})
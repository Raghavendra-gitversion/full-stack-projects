const cells=document.querySelectorAll('.cell');//works when there is a list or multiple elements inside
const playagain=document.getElementById('playagain-button');
const reset=document.getElementById('reset-button');
const friend=document.getElementById('friend-btn');
const game=document.querySelector('.game-container');
const home=document.querySelector('.home');
const restart=document.querySelector('.restart');
const status=document.querySelector('.status')


friend.addEventListener('click',function(){
  moveToGame();
})

function moveToGame(){
 
  home.style.display='none';
  game.style.display='flex';  
  restart.style.display='flex';
    

}

playagain.addEventListener('click',function(){
  
  home.style.display='flex';
  game.style.display='none';
  restart.style.display='none';
  status.style.display='none';
  cells.forEach(cell=>{
    cell.textContent='';
  })
})




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
    currentPlayer=currentPlayer==='X'?'O':'X';
    filledCells++;
  }
    
}
function checkWinner(){
  for(const combination of winningCombinations){
    const [a,b,c]=combination;
    if(cells[a].textContent===cells[b].textContent && cells[a].textContent===cells[c].textContent && cells[a].textContent!==''){
      if(cells[a].textContent==='X'){
        document.getElementById('game_status').textContent="You  won";
        status.style.display='block';
        gameOver=true;
      }else{
        document.getElementById('game_status').textContent="Friend Won"
        status.style.display='block';
        gameOver=true;
      }
      
    }else if(filledCells===9){
      document.getElementById('game_status').textContent="It's a Draw"
      status.style.display='block';
      
    }
  }
}

reset.addEventListener('click',function(){
  cells.forEach(cell=>{
    cell.textContent='';
  })
  status.style.display='none';
  currentPlayer='X';
  gameOver=false; 
  filledCells=0;
})
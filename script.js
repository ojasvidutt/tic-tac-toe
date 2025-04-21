//tic-tac-toe game
let player="player1";
let symbol;
const player1Button = document.querySelector('.button.player1');
const player2Button = document.querySelector('.button.player2');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

let board=["", "", "", "", "", "", "", "", ""]; 
const winningCombinations = [
   [0, 1, 2], [3, 4, 5], [6, 7, 8], 
   [0, 3, 6], [1, 4, 7], [2, 5, 8], 
   [0, 4, 8], [2, 4, 6]             
];

player1Button.style.backgroundColor = '#45A049'; 
player1Button.style.transform = 'scale(1.1)'; 
player1Button.style.boxShadow = '0 7px 11px rgba(0, 0, 0, 0.2)'; 
player1Button.style.transition = 'all 0.3s ease'; 
player1Button.style.border = '2px solid black';

let selected=`<p class="symbol">X</p>`;
document.querySelectorAll(".col-4").forEach((i)=>{

   i.addEventListener("click", function () {
 
   i.innerHTML= selected;
   if(selected==`<p class="symbol">X</p>`){selected= `<p class="symbol red">O</p>` ;  symbol= "X";}
   else{selected=`<p class="symbol">X</p>`;  symbol= "O";}
   board[i.id.split("")[1] - 1] = symbol;
   
   if(player=="player1"){
      player1Button.style.backgroundColor = '#4CAF50'; 
      player1Button.style.transform = 'scale(1)'; 
      player1Button.style.boxShadow = 'none'; 
      player1Button.style.border = 'none';
      
      player2Button.style.backgroundColor = '#303F9F'; 
      player2Button.style.transform = 'scale(1.1)'; 
      player2Button.style.boxShadow = '0 7px 11px rgba(0, 0, 0, 0.2)'; 
      player2Button.style.transition = 'all 0.3s ease'; 
      player2Button.style.border = '2px solid black';
     
      player="player2";}
      
      else{
         player2Button.style.backgroundColor = '#3F51B5'; 
         player2Button.style.transform = 'scale(1)'; 
         player2Button.style.boxShadow = 'none'; 
         player2Button.style.border = 'none';
           player1Button.style.backgroundColor = '#45A049'; 
           player1Button.style.transform = 'scale(1.1)'; 
           player1Button.style.boxShadow = '0 7px 11px rgba(0, 0, 0, 0.2)'; 
           player1Button.style.transition = 'all 0.3s ease'; player1Button.style.border = '2px solid black';
     
         player="player1";
      }
   
   //win function
   function checkWin(board, symbol) {
      return winningCombinations.some(combination =>
          combination.every(index => board[index] === symbol  )
      );
  }

  console.log(checkWin(board, symbol));
  setTimeout(()=>{
   if(checkWin(board, symbol)){
   
 

   
   let overlay= document.querySelector(".overlay");
   overlay.style.display="block";
   overlay.appendChild(document.querySelector(".modal"));
   if(symbol=="X"){modal.querySelector(".modal-message").innerHTML = `player 1 wins!`;}
   else{modal.querySelector(".modal-message").innerHTML = `player 2 wins!`;}
   modal.style.display = "block";



  
 
}
else{
   if(board.includes("")==false ){

      let overlay= document.querySelector(".overlay");
      overlay.style.display="block";
      overlay.appendChild(document.querySelector(".modal"));
      modal.querySelector(".modal-message").innerHTML = "It's a draw!";
      modal.style.display = "block";
   }
}
document.querySelector(".play-again").addEventListener("click", function () { 
   modal.style.display = "none"; 
   document.querySelector(".overlay").style.display="none";
   board=["", "", "", "", "", "", "", "", ""]; 
   document.querySelectorAll(".col-4").forEach((i)=>{
    i.innerHTML= ``;
   })
});
},10); 

console.log(board);
console.log(symbol);
console.log(player); 

})});

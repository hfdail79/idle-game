var score = 0;
var change = 0;
var power = 1;

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element

var Btn = new Button('Button', btnPress);
var Power = new Button('Power', btn2Press);
// Create a text element


function btnPress() {
  score = score + power
  postToPage(score);
}

function btn2Press(){
  if(score >= power){
  
  score = (score - power)
  power = (power + power / 5) 
  
  
}
}



var score = 0;
var change = 0;
var power = 1;

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var scr = new Text(score);                    // Create a text element

createButton('Button', btnPress);
changeTitle('Clicker Game');
createButton('Power', btn2Press);


function btnPress() {
  score = score + power
  postToPage(score, power);
}

function btn2Press(){
  if(score >= power){
  
  score = (score - power)
  power = (power + power / 5) 
  text(power,10,30);
  
}
}



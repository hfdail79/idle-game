var score = 0;
var change = 0;
var power = 1;

postToPage(score);

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



var bread = 0;
var pigeons = 0;
var power = 1;
var price = 10

var title = new Title('Bird Up'); // Create a title element
var feed = new Button('Tame Pigeon', btn2Press);   // Create a button element

var sfb = new Button('Scavenge for bread', btnPress);

function btnPress() {
  bread = bread + power
  
}


function btn2Press(){
  if(bread >= price){
  
  bread = (bread - price)
  pigeons = (pigeons + pigeons / 5) 
}
}
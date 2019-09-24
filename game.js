var breadtrash = 1;
var pigeons = 1;


var title = new Title('Bird Up'); // Create a title element
var feed = new Button('Feed Pigeon', btnPress);   // Create a button element

var sfb = new Text('Trash bread: '+ breadtrash );


var row1 = new Section('row'); 
var column1 = new Section('col');
var column2 = new Section('col');
column1.add(sfb);
column2.add(feed);

row1.add(sfb);
row1.add(feed);



function btnPress() {
  if(breadtrash > 0){
    pigeons = pigeons + 1
    breadtrash = breadtrash - 1
  }
  
}


var breadtrash = 1;
var pigeons = 0;
var crust = 0;
var sparrow = 0;
var gfbread = 0;
var robin = 0;
var wbread = 0;

var title = new Title('Bird Up');
var feed = new Button('Feed Pigeon', btnPress);   
var tbt = new Text('Trash bread: '+ breadtrash);
var pignum = new Text('Pigeons: '+ pigeons);
var ct = new Text('Discarded crust: ' + crust);
var feedsp = new Button('Feed Sparrow', btnPresssp);   
var spnum = new Text('Sparrows: '+ sparrow);
var gft = new Text('Gluten-free bread: ' + gfbread)
var feedrob = new Button('Feed Robin', btnPressrob);
var robnum = new Text('Robins: ' + robin)
var wbt = new Text('White bread: '+ wbread)

var row1 = new Section('row'); 
var column1 = new Section('col');
var column2 = new Section('col');
var row2 = new Section('row'); 
var column3 = new Section('col');
var row3 = new Section('row');
var row4 = new Section('row');

var loop = setInterval(scavenge, 100000)
var pigloop = setInterval(pigcall, 10000)
var sploop = setInterval(spcall, 1000)
var robloop = setInterval(robcall, 100)

column1.add(tbt);
column1.add(ct);
column1.add(gft);
column1.add(wbt);
column2.add(feed);
column2.add(feedsp);
column2.add(feedrob);
column3.add(pignum);
column3.add(spnum);
column3.add(robnum);

row1.add(tbt);
row1.add(feed);
row1.add(pignum);
row2.add(ct);
row2.add(feedsp);
row2.add(spnum);
row3.add(gft);
row3.add(feedrob);
row3.add(robnum);
row4.add(wbt);

function scavenge(){
  breadtrash++;
  tbt.edit('Trash bread: ' + breadtrash);
}

function pigcall(){
  for(i = pigeons; i > 0; i--){
   crust++;  
  }
  ct.edit('Discarded crust: ' + crust);
}

function spcall(){
  for(i = sparrow; i > 0; i--){
    gfbread++;
  }
  gft.edit('Gluten-free bread: ' + gfbread);
}

function robcall(){
  for(i = robin; i > 0; i--){
    wbread++;
  }
  wbt.edit('White bread: ' + wbread);
}

function btnPress() {
  if(breadtrash > 0){
    pigeons++;
    breadtrash--;
  }
  tbt.edit('Trash bread: ' + breadtrash);
  pignum.edit('Pigeons: ' + pigeons);
}

function btnPresssp(){
  if(crust > 0){
    sparrow++;
    crust--;
  }
  ct.edit('Discarded crust: ' + crust);
  spnum.edit('Sparrows: ' + sparrow);
}

function btnPressrob(){
  if(gfbread > 0){
    robin++;
    gfbread--;
  }
  gft.edit('Gluten-free bread: ' + gfbread);
  robnum.edit('Robins: ' + robin)
}
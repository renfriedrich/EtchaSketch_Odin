const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.style.border = '3px solid #000000'
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).id = "grid-item"; 
    };
};
makeRows(8, 8); 

document.onmouseover = function(e) {
  var targ;
  if (!e) var e = window.event;
  if (e.target.id == "grid-item") targ = e.target;
  /*else if (e.srcElement) targ = e.srcElement;*/
  if (targ.nodeType == 3) // defeat Safari bug
      targ = targ.parentNode;
  /*console.log(targ.id);*/
  targ.style.backgroundColor = 'black';
}
function resetGrid(){
  while(container.firstChild){
      container.removeChild(container.firstChild);
  }
}
let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
  resetGrid();
  let boxnum = prompt("Enter number between 1 and 100");
  if (boxnum > 90) {
    prompt("I told you not to enter a number above 90");  
  } else if (boxnum < 90){
makeRows(boxnum, boxnum);}
});
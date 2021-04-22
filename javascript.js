window.onload = function() {
  for (i = 0; i < 75; i++ ){
      let div = document.createElement('div');
      div.className = 'box';
      let h3 = document.createElement('h3');
      h3.append(i + 1);
      div.appendChild(h3); 
      let cells = document.getElementById('cells');
      cells.appendChild(div);

  }

}
 
function play(){
   
  let randomNumber = Math.floor(Math.random() * 75) + 1;
    let reference = document.getElementById('bingo');
    
        reference.innerText = parseInt(randomNumber);

    let cells = document.querySelectorAll('.box');
    for(i = 0; i< cells.length; i++) {
      if (randomNumber==parseInt(cells[i].innerText)) {
         cells[i].style.backgroundColor = 'red';

      }
   
    }
    }
const char = document.querySelector(".bloco")
const instruçao = document.querySelector("#titulo")

function move(event){
  
  if(event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    }
  else if (event.key === 'ArrowDown'){
    event.preventDefault();
    moveDown();
  }

  else if (event.key ==="ArrowLeft"){
      event.preventDefault();
      moveLeft();
    }
  else if (event.key ==="ArrowRight"){
    event.preventDefault();
    moveRight();
  }
  
}

function moveUp() {
    let topPosition = getComputedStyle(char).getPropertyValue('top');
    if(topPosition === "0px") {
        return
    } else {
        let position = parseInt(topPosition);
        position -= 20;
        char.style.top = `${position}px`;
  }
    }

function moveDown() {
    let topPosition = getComputedStyle(char).getPropertyValue('top');
    if(topPosition === "540px"){
        return
    } else {
        let position = parseInt(topPosition);
        position += 20;
        char.style.top = `${position}px`;
    }
}

function moveLeft(){
  let leftPosition = getComputedStyle(char).getPropertyValue('left');
  if (leftPosition === '0px'){
    return
 } else {
    let position = parseInt(leftPosition)
    position -= 20;
  char.style.left = `${position}px`;
 }
}

function moveRight(){
   let leftPosition = getComputedStyle(char).getPropertyValue('left');
  if (leftPosition === '540px'){
    return
 } else {
    let position = parseInt(leftPosition)
    position += 20;
  char.style.left = `${position}px`;
 }
}

char.addEventListener('click' , (event) => {
  play();
});

function play(){
  window.addEventListener ('keydown' , move );
  instruçao.innerText = "Use as setas do teclado para direcioná-lo"
}



  

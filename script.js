const container = document.getElementById("container");
var slider = document.getElementById("myRange");
var size = 16;
const sizebox = document.getElementById("sizebox");
sizebox.textContent = size;
const reset = document.getElementById("reset");

game()
makeGrid(size);

function game(){
    slider.addEventListener("mouseup" , function(){
        size = slider.value;
        sizebox.textContent = size;
        makeGrid(size);
    })
    reset.addEventListener("mouseup" , function(){
        clearCont();
        makeGrid(size);
    })
}

function makeGrid(size){
    clearCont();
    for(let i = 0; i < size * size ; i++){
        makeDiv(size);
    }
}

function makeDiv(size){
    const widtha = 500 / size   + "px";
    const heighta = 500 / size  + "px";
    const div = document.createElement('div');
    div.classList.add('box');
    div.setAttribute("style" , "border: none;");
    div.style.width = widtha;
    div.style.height = heighta;
    container.setAttribute("style" , "display: flex; flex-flow: column wrap;");
    container.appendChild(div);
    var slides = 0;
    div.addEventListener("mouseenter" , function(){
        if(slides == 0){
            div.style.backgroundColor = 'silver';
            slides = slides + 1;
        }else if(slides == 1){
            div.style.backgroundColor = 'gray';
            slides = slides + 1;
        }else if(slides ==2){
            div.style.backgroundColor = 'darkslategray';
            slides = slides + 1;
        }else if(slides == 3){
            div.style.backgroundColor = 'black';
        }
    })
}

function clearCont(){
    var divs = document.getElementsByClassName("box");
    if(divs.length > 0){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    }
}
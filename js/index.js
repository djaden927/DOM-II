// Your code goes here
// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`


// mouseover and mouseout to change color of title.
let title = document.querySelector('h1');
title.addEventListener('mouseover', function(event){
    event.target.style.color = "red";
});

title.addEventListener('mouseout', function(event){
    event.target.style.color = "black";
});

// keydown and keyup
document.addEventListener('keydown', changebackC)
document.addEventListener('keyup', originalColor)

function changebackC(event){
        if(event.key === "c"){
            const setBg = () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                document.body.style.backgroundColor = "#" + randomColor;
                color.innerHTML = "#" + randomColor;
              }
              setBg();
        }
}

function originalColor(event){
    if(event.key === "c"){
        document.body.style.backgroundColor = "";
    }
}

// load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    document.querySelector('body').style.color = "red";
    setTimeout(function(){
        document.querySelector('body').style.color = "";
    }, 700)
  });

// click and double click
  document.addEventListener('click', function(event){
      event.target.style.opacity = 0.5;
  })

  document.body.addEventListener('dblclick', (e) =>{
    e.target.style.opacity = "1";
  });

//   resize
window.addEventListener("resize", myFunction);

function myFunction() {
  document.querySelector('h1').style.color = 'green';
}


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.001;
  
    // Restrict scale
    scale = Math.min(Math.max(1, scale), 1.75);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;
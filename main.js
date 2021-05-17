const bg = document.querySelector('.bg');
const loadignText = document.querySelector('.loading-text');

let num = 0;
let int = setInterval(getBlurr, 30);

function getBlurr(){
     num++;
    
     if(num > 99) {
       clearInterval(int);
     }

     loadignText.innerHTML = `${num}%`;
     loadignText.style.opacity = scale(num, 0, 100, 0);

     bg.style.filter = `blur(${scale(num, 0, 100, 20, 0)}px)`;

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
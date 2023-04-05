const sliderPrew2 = document.querySelector('#m10');
const sliderLine2 = document.querySelector('.slider_line2');
const sliderNext2 = document.querySelector('#m20');


let offset2 = 0

sliderNext2.addEventListener('click',()=>{
    offset2 = offset2+1520;
    if(offset2 > 3040){
        offset2 = 0
    }
    sliderLine2.style.left = -offset2+'px'

})

sliderPrew2.addEventListener('click',()=>{
    offset2 = offset2-1520;
    if(offset2 <0){
        offset2 =3040
    }
    sliderLine2.style.left = -offset2+'px'
})
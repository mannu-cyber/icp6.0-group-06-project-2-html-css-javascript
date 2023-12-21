


function swiper(){
    var swiper = new Swiper(".page1 .mySwiper", {
      loop: true,
      autoplay:true,
      grabCursor:"true",
      slidesPerView: 1,
    
      spaceBetween: 10,
  
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      },
    })}
  
  swiper()
  




const mainElement = document.querySelector(".main")
const cursor = document.querySelector('#cursor')
cursor.style.color = ""


mainElement.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    })

})


const toggler1 = document.getElementById('myTopnav');
let state = false;

function toggler() {
    if (state == false) {
        if (toggler1 == false) {

        }
        state = true;
    }
    else {
        bulbElement.src = 'off.png';
        state = false;
    }
}



// Try Your luck 


const sufflElement = document.getElementById("suffleImg")

function suffle(){
  const min = 1;
  const max = 10;

const randomNum = Math.floor(Math.random() * (max - min )) +min;

if(randomNum >= 1 && randomNum <5 ){
  sufflElement.src ="../logo/three.png"
  console.log("hello1");
}

else if(randomNum >= 5 && randomNum< 8)
{
  sufflElement.src ="../logo/six.png"
  console.log("hello2")
} 

else if(randomNum >= 8 && randomNum <= 10){
  sufflElement.src ="../logo/one.png"
console.log("hello 3")
}

}




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
        500: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 50,
        },
      },
    })}
  
  swiper()
  




const mainElement = document.querySelector(".main")
const cursor = document.querySelector('#cursor')



mainElement.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
       opacity:1
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



gsap.from("header li", {
opacity:0,
scale:0,
  duration:1,
  delay:.5,
  y:-200,
  stagger:.5,
  scrub:5,
})

gsap.from(".logo",{
  x:1200,
  scale:0,
  opacity:0,
  duration:1,
})

gsap.from(".logo-name",{
  x:700,
  scale:0,
  opacity:0,
  duration:1,
  delay:2,
})

gsap.from(".login-signup",{
  scale:0,
  rotate:360,
  opacity:0,
  duration:2,
  delay:1,
x:-700,
delay:3,
})


gsap.from(".page2 a",{
  scrollTrigger:{
    // markers:true,
    start:"top 76%",
  end:"bottom 40%",
  scroller:"body",
  trigger:".page2 a",
  // scrub:5,

  // delay:.2,
  // duration:.5,
},
stagger:1,
scale:0,
opacity:0,
})

gsap.from(".page2 h1",{

  scrollTrigger:{
    // markers:true,
    start:"top 76%",
  end:"bottom 40%",
  scroller:"body",
  trigger:".page2 h1",
  // scrub:5,
rotation:360,
  // delay:.2,
  // duration:.5,
},
  scale:0,
  opacity:0,
  delay:.4,
  duration:1,
})


gsap.from(".page1 h1",{

  scrollTrigger:{
    // markers:true,
    start:"top 76%",
  end:"bottom 40%",
  scroller:"body",
  trigger:".page1 h1",
  // scrub:5,

  // delay:.2,
  // duration:.5,
},
scale:0,
opacity:0,
duration:1,
})


gsap.from(".page3 h1",{
  scrollTrigger:{
    // markers:true,
    start:"top 80%",
  end:"bottom 40%",
  scroller:"body",
  trigger:".page3",
  // scrub:5,

  // delay:.2,
  // duration:.5,
},
duration:1,
scale:0,
opacity:0,

})

  
gsap.from(".page3 #suffleImg",{
  scrollTrigger:{
    // markers:true,
    start:"top 80%",
  end:"bottom 40%",
  scroller:"body",
  trigger:".page3 #suffleImg",
  // scrub:5,

  // delay:.2,
  // duration:.5,
},
duration:1,
scale:0,
opacity:0,

})



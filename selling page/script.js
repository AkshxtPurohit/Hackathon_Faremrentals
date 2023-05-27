gsap.registerPlugin();

var swiper = new Swiper(".mySwiper", {
  spaceBetween : 40,
  slidesPerView: 2,
  centeredSlides: true,
  loop:true,
  
  pagination: {
    el: ".swiper-pagination",
   
  },
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on:{

  }
});

// el: ".swiper-pagination",
  
const crsor = document.querySelector('.cursor'); 

document.addEventListener('mousemove',e => {
  crsor.setAttribute("style","top:" + e.pageY+"px; left: " + e.pageX + "px;");
}
)

document.querySelector('#main').addEventListener('mousemove',()=>{
    crsor.style.backgroundColor = "white";
    crsor.style.transition="all 1s cubic-bezier(0.19, 1, 0.22, 1)";
    gsap.to('.cursor',
    {
      scale : 2,
      ease : Expo.easeIn,
    }
    )
});




  
  // var typed = new Typed("#text", {
  //   strings:["“To forget how to dig the earth and to tend the soil is to forget ourselves.” -Mahatma Gandhi"],
  //   typeSpeed: 20,
  //   backSpeed: 30,
  //   backDelay: 500,
  //   startDelay: 1000,
  //   loop: true
  // }
  // );
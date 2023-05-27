gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
function parllax(){
  $('#section2').parallax({imageSrc: 'photo-1634433545797-c18dd170e75e.avif'});
}
function cursor(){
const crsor = document.querySelector('#cursor'); 
document.addEventListener('mousewheel',e => {
  crsor.setAttribute("style","top:" + e.pageY+"px; left: " + e.pageX + "px;");
})
document.addEventListener('mousemove',e => {
  crsor.setAttribute("style","top:" + e.pageY+"px; left: " + e.pageX + "px;");
})
//     window.addEventListener('mouseover',function(dets){
//   document.querySelector('#cursor').style.scale=1;
// });
// window.addEventListener('mouseleave',function(dets){
//   document.querySelector('#cursor').style.scale=0;
// });
document.querySelector("#sec2txt").addEventListener("mouseover",function(){
  gsap.to(crsor,{
    scale:3,
    ease:Expo.easeInOut,
    duration:1
  })
  
})
document.querySelector("#sec3head").addEventListener("mouseover",function(){
  gsap.to(crsor,{
    scale:3,
    ease:Expo.easeInOut,
    duration:1
  })
  
})
document.querySelector(".sec3txt").addEventListener("mouseover",function(){
  gsap.to(crsor,{
    scale:3,
    ease:Expo.easeInOut,
    duration:1
  })
})
document.querySelector("#sec4head").addEventListener("mouseover",function(){
  gsap.to(crsor,{
    scale:3,
    ease:Expo.easeInOut,
    duration:1
  }) 
})
document.querySelector("#sec2.txt,#sec3head,#sec3txt,#sec4head").addEventListener("mouseleave",function(){
  gsap.to(crsor,{
    scale:1,
    ease:Expo.easeInOut,
    duration:1
  })
  
})
}
cursor();
parllax();
var swiper1 = new Swiper("#section1 .mySwiper", {
  effect: "cards",
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    on:{ 
      init: function(){
        gsap.from(".swiper-slide:nth-child(1)>.cp",{
          opacity:.5,
          y:"-100vh",
          ease:Expo.easeInOut,
          duration:.5,
          stagger:.2,
        })
      },
      slideChangeTransitionStart: function(){
          gsap.from(".swiper-slide:nth-child(1)>.cp",{
            y:"-100vh",
            ease:Expo.easeInOut,
            duration:1,
            stagger:.3,
          })
         gsap.from(".swiper-slide:nth-child(2)>.cp",{
          y:"-100vh",
              ease:Expo.easeInOut,
              duration:1,
              stagger:.3,
            })
            gsap.from(".swiper-slide:nth-child(3)>.cp",{
          y:"-100%",
              ease:Expo.easeInOut,
              duration:1,
              stagger:.2,
            })
            gsap.from(".swiper-slide:nth-child(4)>.cp",{
          y:"-100%",
              ease:Expo.easeInOut,
              duration:1,
              stagger:.2,
            })
        },
    }
  
  });
  
  function ab(){
    gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
gsap.set("#tractor", {transformOrigin: "50% 50%"});
let rotateTo = gsap.quickTo("#tractor", "rotation"),
    prevDirection = 0;

gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top 50%",
    end: () => "+=" + document.querySelector("#motionPath").getBoundingClientRect().height,
    scrub: 0.5,
    onUpdate: self => {
      if (prevDirection !== self.direction) {
        rotateTo(self.direction === 1 ? 0 : -180);
        prevDirection = self.direction;
      }
    }
  },
  ease: pathEase("#motionPath"), 
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  }
});

}
ab();
function pathEase(path, axis="y", precision=1) {
  let rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]), Math.round(precision * 12)),
    useX = axis === "x",
    start = rawPath[0][useX ? 0 : 1],
    end = rawPath[rawPath.length - 1][rawPath[rawPath.length-1].length - (useX ? 2 : 1)],
    range = end - start,
    l = Math.round(precision * 200),
    inc = 1 / l,
    positions = [0],
    a = [],
    minIndex = 0,
    getClosest = p => {
      while (positions[minIndex] <= p && minIndex++ < l) { }
      a.push((p - positions[minIndex-1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc);
    },
    i = 1,
    p, v;
  for (; i < l; i++) {
    p = i / l;
    v = MotionPathPlugin.getPositionOnPath(rawPath, p)[axis];
    positions[i] = (v - start) / range;
  }
  positions[l] = 1;
  for (i = 0; i < l; i++) {
    getClosest(i / l);
  }
  a.push(1);
  return p => {
    let i = p * l,
      s = a[i | 0];
    return s + (a[Math.ceil(i)] - s) * (i % 1);
  }
}

var swiper = new Swiper('#section4 .swiper', {
  slidesPerView: 3,
  spaceBetween:30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on:{
    slideChange:function(){
      gsap.from("#section4 .swiper-slide",{
        scale:.9,
        ease:Expo.easeInOut,
        duration:1
      })
    }
  }
})

document.querySelectorAll("#section4 .swiper-slide").forEach(function(elem){
  elem.addEventListener("mouseover",function(){
  gsap.to(elem,{
    scale:1.1,
    ease:Expo.easeInOut,
    duration:1
  })
  })
  })
  document.querySelectorAll(".sec4txt").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
    gsap.to(elem,{
      opacity:1,
      ease:Expo.easeInOut,
      duration:1
    })
    })
    })

document.querySelectorAll("#section4 .swiper-slide").forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
  gsap.to(elem,{
    scale:1,
    ease:Expo.easeInOut,
    duration:1
  })
  })
})
document.querySelectorAll(".sec4txt").forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
  gsap.to(elem,{
    opacity:0,
    ease:Expo.easeInOut,
    duration:1
  })
  })
  })
  function sec5(){
    document.querySelector('#buy').addEventListener('mouseenter',function(){
        gsap.to("#bright",{
            width:"100%",
            ease:Expo.easeInOut,
            opacity:1,
            duration:1,
        })
    })
    document.querySelector('#bleft').addEventListener('mouseenter',function(){
      gsap.to("#bright",{
          width:"100%",
          ease:Expo.easeInOut,
          opacity:1,
          duration:1,
      })
  })
    document.querySelector('#bright').addEventListener('mouseenter',function(){
      gsap.to("#bright",{
          width:"100%",
          ease:Expo.easeInOut,
          opacity:1,
          duration:.1,
      })
  })
  document.querySelector('#bright a').addEventListener('mouseenter',function(){
    gsap.to("#bright",{
        width:"100%",
        ease:Expo.easeInOut,
        opacity:1,
        duration:1,
    })
})
    document.querySelector('#sell').addEventListener('mouseenter',function(){
        document.querySelector('#buy').style.width="0";
        gsap.to("#buy",{
          ease:Expo.easeInOut,
          opacity:0,
          duration:1,
      },0.2)
      
    })
   
    document.querySelector('#buy').addEventListener('mouseleave',function(){
        gsap.to("#bright",{
            width:"0%",
            ease:Expo.easeInOut,
            opacity:0,
            duration:1,
        })
       
    })
    document.querySelector('#sell').addEventListener('mouseleave',function(){
        document.querySelector('#buy').style.width="50%";
        document.querySelector('#buy').style.opacity=1;
    })
}
sec5();

function scroll(){
  var tl=gsap.timeline();
  tl
  .from("#section1,.myswiper",{
    y:-10,
    opacity:0,
    ease:Expo.easeInOut,
    duration:2,
    stagger:.2

  })
  .from("#sec2txt",{
    y:-10,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1,
    stagger:.2
  })
  gsap.from("#sec3head",{
    y:-10,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1,
    scrollTrigger:{
      trigger:"#section2",
      start:"bottom 50%",
    }
  })
  gsap.from(".sec3txt:nth-child(1)",{
    x:180,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5,
    scrollTrigger:{
      trigger:"#section3",
      start:"top -10%",
    }
  })
  gsap.from(".sec3txt:nth-child(2)",{
    x:-80,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5,
    scrollTrigger:{
      trigger:"#section3",
      start:"top -25%",
    }
  })
  gsap.from(".sec3txt:nth-child(3)",{
    x:180,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5,
    scrollTrigger:{
      trigger:"#section3",
      start:"top -45%",
    }
  })
  gsap.from(".sec3txt:nth-child(4)",{
    x:-80,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5,
    scrollTrigger:{
      trigger:"#section3",
      start:"top -75%",
    }
  })
  gsap.from(".sec3txt:nth-child(5)",{
    x:180,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5,
    scrollTrigger:{
      trigger:"#section3",
      start:"top -85%",
    }
  })
  gsap.from(".sec3txt:nth-child(6)",{
    x:-80,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5,
    scrollTrigger:{
      trigger:"#section3",
      start:"top -105%",
    }
  })

}
scroll();
















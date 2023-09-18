// mousecircle
var cursor = document.querySelector('#mousecirle')
var main = document.querySelector('#main')
main.addEventListener('mousemove', function(dets){
  cursor.style.left = dets.x +'px'
  cursor.style.top = dets.y +'px'
})

function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init()

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page h1",
        scroller: "#main",
        start: "top -10%",
        end: "top -90%",
        scrub: 3,
    }
})

tl.to("#page h1",{
    x: -100,
    duration: 1,
},"same")

tl.to("#page h2",{
    x: 100,
    duration: 1, 
},"same")

tl.to("#page video",{
    width: '99%',
    duration: 1,
    trasition: 'width 1s ease',
},"same")

tl.to("#video-text",{
  width: "99%",
  position: "relative",
  left: "-299px",
  duration: 1,
  trasition: 'width 1s ease',
},"same")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page h1",
        scroller: "#main",
        start: "top -100%",
        end: "top -300%",
        scrub: 3
    }
})

tl2.to("#main",{
  backgroundColor: "white"
})

var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: "#page h1",
      scroller: "#main",
      start: "top -350%",
      end: "top -370%",
      scrub: 3
  }
})

tl3.to("#main",{
  backgroundColor: "black"
})

var client = document.querySelectorAll(".clients")

client.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    cursor.style.width = '200px'
    cursor.style.height = '200px'
    cursor.style.borderRadius = '0'
    var att = elem.getAttribute("data-image")
    console.log(att)
    cursor.style.backgroundImage = `url(${att})`
    cursor.style.backgroundPosition = 'center'
    cursor.style.backgroundSize = 'cover'
  })

  elem.addEventListener("mouseleave", function(){
    cursor.style.width = '15px'
    cursor.style.height = '15px'
    cursor.style.borderRadius = '50px'
    cursor.style.backgroundImage = `none`
  })
})

var purple = document.querySelector(".purple")

console.log(purple.childNodes)

var nav = document.querySelector("#nav")

var nav_p = document.querySelectorAll("#nav-2 p")
console.log(nav_p)

nav_p.forEach(function(elem,i){
  console.log(elem)
  
  elem.addEventListener("mouseenter", function(e){
    purple.style.display = 'block'
    elem.style.color = 'black'
    elem.style.borderBottomColor = 'black'
    if(i == 0){
      purple.childNodes[1].setAttribute("behavior","scroll")
      purple.childNodes[1].style.display = 'block'
      purple.childNodes[3].style.display = 'none'
      purple.childNodes[5].style.display = 'none'
      purple.childNodes[7].style.display = 'none'
      console.log(purple.childNodes[1])
    }else if(i == 1){
      purple.childNodes[1].style.display = 'none'
      purple.childNodes[3].style.display = 'block'
      purple.childNodes[5].style.display = 'none'
      purple.childNodes[7].style.display = 'none'
    }else if(i == 2){
      purple.childNodes[1].style.display = 'none'
      purple.childNodes[3].style.display = 'none'
      purple.childNodes[5].style.display = 'block'
      purple.childNodes[7].style.display = 'none'
    }else if(i == 3){
      purple.childNodes[1].style.display = 'none'
      purple.childNodes[3].style.display = 'none'
      purple.childNodes[5].style.display = 'none'
      purple.childNodes[7].style.display = 'block'
    }else {

    }
  })

  elem.addEventListener("mouseleave", function(){
    purple.style.display = 'none'
    elem.style.color = 'white'
    elem.style.borderBottomColor = 'white'
  })
})


var tl4 = gsap.timeline({
  scrollTrigger: {
      trigger: "#page h1",
      scroller: "#main",
      start: "top -600%",
      end: "top -620%",
      scrub: 3
  }
})

tl4.to("#main",{
  backgroundColor: "rgb(254, 223, 228)",
})
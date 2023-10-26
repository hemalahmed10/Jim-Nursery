const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var video = document.querySelector("#lastvideo");
var btn   = document.querySelector("#futurebtn");
var magic = document.querySelector(".future")

function vodeo(){
    btn.addEventListener("mouseenter",function(){
        video.style.scale=1
        magic.style.opacity=.3
    })
    btn.addEventListener("mouseleave",function(){
        video.style.scale=0
        magic.style.opacity=1
    })
};
vodeo();


gsap.from(".nav",{
    y:50,
    opacity:0,
    duration:1.5,
})
gsap.from(".middletext h2",{
    x:-80,
    opacity:0,
    duration:1,
    stagger:1
})
gsap.from(".middleobj img",{
    opacity:0,
    scale:2
})
gsap.from(".leftitem h2",{
    x:-80,
    opacity:0,
    duration:1,
})
gsap.from(".leftitem p",{
    x:80,
    opacity:0,
    duration:1,
})
gsap.from(".leftitem img",{
    opacity:0,
    scale:0
})
gsap.from(".heroright",{
    y:-40,
    opacity:0,
    duration:0.5,
})
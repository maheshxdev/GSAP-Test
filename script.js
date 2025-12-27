gsap.to("#page2 h1",{
    transform:"translate(-66%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top",
        end:"top -200%",
        scrub:2,
        pin:true
        
    }
})

var tl=gsap.timeline()

tl.from("#nav h2",{
    y:-20,
    delay:0.4,
    duration:0.5,
    opacity:0
})

tl.from("#box h4",{
     y:-20,
    duration:0.5,
    opacity:0,
    stagger:0.2
})

gsap.from("#hero #tagLine",{
    opacity:0,
    scale:0,
    duration:2,
    delay:0.5
})

gsap.from("#content #box1",{
    x:-300,
    duration:2,
    delay:0.5
})
gsap.from("#content #box2",{
    x:300,
    duration:2,
    delay:0.5
})

var tl1=gsap.timeline()

tl1.from("#page3 h1",{
    opacity:0,
    x:-300,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 80%",
        end:"top 10%",
        // markers:true,
        scrub:0.2
    }
})

tl1.from("#page3 h2",{
    opacity:0,
    x:300,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 80%",
        end:"top 10%",
        // markers:true,
        scrub:0.2
    }
})

gsap.from("#page1 #hero",{
    opacity:1,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -50%",
    }
})
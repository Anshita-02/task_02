var tl = gsap.timeline();

tl.
    from("#front-loader h1" ,{
        x:35,
        duration:1,
    })
    .to("#front-loader h1", { 
        y:-50,
        duration:1,
        opacity:0,
    })
    .to("#front-loader" ,{
        height:0,
        duration:1
    })
    .to("#green-sec" , {
        height:"100%",
        duration:1,
        delay:-1.2,
        top:0
    })
    .to("#green-sec" , {
        height:"0%",
        duration:1,
        delay:-0.5
    })
    .to("#home-page",{
        bottom:0,
        height:"100%",
        duration:1,
        display:"block"
    })
    .to("#skills", {
        display:"block", 
        duration:0.5,
    })
    .to("#work", {
        display:"block", 
        duration:0.5,
    })
    .to("#contact", {
        display:"block", 
        duration:0.5,
    })
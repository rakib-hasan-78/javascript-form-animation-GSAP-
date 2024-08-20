const footerTimeLine = () => {
    
    const ftl = gsap.timeline({defaults:{duration:.75, ease:"power3.out"}});
    ftl.fromTo('.test-1', {x:'100%', opacity:0}, {x:0, opacity:1 , duration:1, delay:.4},"<20%");
    ftl.fromTo('.test-2', {y:'100%', opacity:0}, {y:0, opacity:1 , duration:1, delay:.4},"<20%");
    ftl.fromTo('.test-3', {y:'-100%', opacity:0}, {y:0,opacity:1 , duration:1, delay:.4},"<20%");
    ftl.fromTo('.text-name', {scale:0, color:'white'},{scale:1.3, color:'#5E5D9A', ease:"power2.out"},"<10%");
}

export default footerTimeLine;
function animatingCharacter() {
    // animating character---->
    gsap.set('.eyes', {transformOrigin:'center'})
    gsap.fromTo('.eyes', {scaleY:1}, {scaleY:.3, yoyo:true, repeat:-1, repeatDelay:.5, ease:"power2.out"})

    gsap.set('.eye-brow', {transformOrigin:'center'})

    gsap.fromTo('.eye-brow', {y:0}, {y:-1, yoyo:true, repeat:-1, repeatDelay:.5, ease:"power2.easeOut"})
}

export default animatingCharacter;
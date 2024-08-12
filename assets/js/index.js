import textAnimation from './textanimation.js';
// textAnimation ---->
textAnimation('.title-word-two');
textAnimation('.title-word-three');
textAnimation('.title-word-one');

gsap.to('.letter', {display:'inline-block'});
gsap.fromTo('.letter', {y:'100%', opacity:0}, {y:0, opacity:1, delay:1, stagger:.05,ease:'back.out(3)', yoyo:true, repeat:-1, repeatDelay:.5});


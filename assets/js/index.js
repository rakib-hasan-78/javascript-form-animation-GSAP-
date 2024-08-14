import textAnimation from './textanimation.js';
// textAnimation ---->
textAnimation('.title-word-two');
textAnimation('.title-word-three');
textAnimation('.title-word-one');

gsap.to('.letter', {display:'inline-block'});
gsap.fromTo('.letter', {y:'100%', opacity:0}, {y:0, opacity:1, delay:1, stagger:.05,ease:'back.out(3)', yoyo:true, repeat:-1, repeatDelay:.5});

// *  form animation --->

const containers = document.querySelectorAll('.input-container');
const form = document.querySelector('form');
const tl = gsap.timeline({defaults:{ duration:.75}});

const start = "M0 0.5C0 0.5 13.5 0.5 149.5 0.5C285.5 0.5 300 0.5 300 0.5";
const end = "M1 0.5C1 0.5 26.5 11 149 11C271.5 11 302.5 0.5 302.5 0.5" ;

containers.forEach((container) => {
    const input = container.querySelector('.input');
    const line = container.querySelector('.elastic-line');
    const placeholder = container.querySelector('.input-placeholder');
    
    input.addEventListener('click', () => {
        if (!input.value) {
            tl.fromTo(line, {attr: {d:start}}, {attr:{d:end}, ease: "power2.out"})
        }
    })
})




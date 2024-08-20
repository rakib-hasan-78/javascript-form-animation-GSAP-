import colorize from './colorize.js';
import emailRegex from './emailregex.js';
import footer from './footer.js';
import footerText from './footertext.js';
import footerTimeLine from './footertimeline.js';
import animatingCharacter from './formanimation.js';
import nameRegex from './nameregex.js';
import phoneValidation from './phoneregex.js';
import textAnimation from './textanimation.js';


// text animation function 

const textFunction = (classNameOne, classNameTwo, classNameThree) => {
    
    // textAnimation ---->
    textAnimation(classNameOne);
    textAnimation(classNameTwo);
    textAnimation(classNameThree);
    
    gsap.to('.letter', {display:'inline-block'});
    gsap.fromTo('.letter', {y:'100%', opacity:0}, {y:0, opacity:1, delay:1, stagger:.05,ease:'back.out(3)', yoyo:true, repeat:-1, repeatDelay:.5});
}

textFunction('.title-word-one', '.title-word-two', '.title-word-three');

// form animation form 

const formAnimation = () => {
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
            
            input.addEventListener('focus', () => {
                if (!input.value) {
                    tl.fromTo(line, {attr: {d:start}}, {attr:{d:end}, ease: "power2.out"});
                    tl.to(line, {attr:{d:start}, ease:'elastic.out(3,.5)'},'<50%');
                    tl.to(placeholder, {y:-15, left:0, scale:.8 ,duration:.5, ease:"power3.easeOut"},'<15%');
                }
    
            });
        })
    
    
        form.addEventListener('click', (e) => {
    
            containers.forEach((container) => {
                const input = container.querySelector('.input');
                const line = container.querySelector('.elastic-line');
                const placeholder = container.querySelector('.input-placeholder');
    
                if (document.activeElement!==input) {
                    if (!input.value) {
                        
                        tl.to(container.querySelector('.input-placeholder'),{y:0,left:0, scale:1, duration:.3,  ease:"power3.easeOut"},'<35%')
                    }
                }
                input.addEventListener('input', (e) => {
                    // name validation
                    if (e.target.type==='text') {
                        let {isValid} = nameRegex(e.target.value)
                        if (isValid) {
                            colorize('green', line, placeholder);
                        } else if (e.target.value === '') {
                            colorize('rgb(175, 172, 172)', line, placeholder);
                        } else {
                            colorize('red', line, placeholder);
                        }
                    }
                    // email validation--->
                    if (e.target.type==='email') {
                        let {isValid} = emailRegex(e.target.value);
                        if (isValid) {
                            colorize('green',line, placeholder)
                        }
                        else if (e.target.value===''){
                            colorize('rgb(175, 172, 172)', line, placeholder);
                        }
                        else{
                            colorize('red', line, placeholder)
                        }
                    }

                    // phone number validation --->

                    if (e.target.type==='tel') {
                        let {isValid} = phoneValidation(e.target.value);

                        if (isValid) {
                            colorize('green',line, placeholder);
                        }
                        else if (e.target.value==='') {
                            colorize('rgb(175, 172, 172)', line, placeholder);
                        }
                        else {
                            colorize('red', line, placeholder);
                        }
                    }
                })
            })
        });
    
        // checkbox
        const checkbox = document.querySelector('.checkbox');
        const tickMarkPath = document.querySelector('.tick-mark path');
        const pathLength = tickMarkPath.getTotalLength();
    
        gsap.set(tickMarkPath , {strokeDashoffset:pathLength, strokeDasharray:pathLength})
    
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                tl.to('.checkbox-fill', {top:'0%'});
                tl.fromTo(tickMarkPath, {strokeDashoffset:pathLength}, {strokeDashoffset:0},"<50%")
                tl.to('.promotions', {color:'#6190ed'},'<20%')
            } else{
                tl.to('.checkbox-fill', {top:'100%'});
    
                tl.to('.promotions', {color:'#c5c5c5'}, '<')
            }
            console.log('clicked')
        })

    form.addEventListener('submit', function(e) {
        
        const line = document.querySelectorAll('.elastic-line');
        const placeholder = document.querySelectorAll('.input-placeholder');
        e.preventDefault();
        let isValid = true;

        containers.forEach((container) => {
            const input = container.querySelector('.input');

            if (input.type==='text') {
                let {isValid:nameValid} = nameRegex(input.value);
                if (!nameValid) isValid = false;
            }

            if (input.type==='email') {
                let {isValid:emailValid} = emailRegex(input.value);
                if(!emailValid) isValid = false;
            }
            if (input.type==='tel') {
                let {isValid:phoneValid} = phoneValidation(input.value);
                if(!phoneValid) isValid = false;
            }
        });

        if (isValid) {

           

                tl.to('.row-custom', {y:30, opacity:0});
                tl.to('.form-custom', {scale:0.8},'<');
                tl.fromTo('.custom-p', {opacity:0, y:30}, {y:0, opacity:1, ease: "elastic.inOut(2,0.3)"});
                gsap.set('#hand',{tranformOrigin:'left'});
                tl.fromTo('#hand',{rotation:0, y:0}, {rotation:-10, y:2, duration:2, yoyo:true, repeat:1 ,delay:1, ease: "elastic.in(3,0.3)"});
                colorize('rgb(175, 172, 172)', line, placeholder);
                tl.to(('.input-placeholder'),{y:0,left:0, scale:1, duration:.3,  ease:"power3.easeOut"});
    
                let formData = {
                    Name: this.querySelector('.input-name').value,
                    Email:this.querySelector('.input-email').value,
                    Phone:this.querySelector('.input-tel').value
                };
                console.log(JSON.stringify(formData));

                this.reset();   
                gsap.set(tickMarkPath , {strokeDashoffset:pathLength})

                
                    tl.to('.checkbox-fill', {top:'100%'});
                    
                    tl.to('.promotions', {color:'#c5c5c5'})
          
                setTimeout(() => {
                tl.to('.custom-p', {y:30, opacity:0});
                tl.to('.row-custom', {y:0, opacity:1});
                tl.to('.form-custom', {scale:1},'<');

                },[3000])
        }
    })
}

formAnimation();
// animatingCharacter function ---->
animatingCharacter();
// footer 
footer();
// footer text-customize for animation-->
footerText();
// footer timeline---->
footerTimeLine();



    
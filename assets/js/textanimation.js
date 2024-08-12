const textAnimation = (value) => {
    const mainTitle = document.querySelector(value);
    const letters = mainTitle.innerHTML.split('');
    mainTitle.innerHTML=''
    ;[...letters].forEach((letter) => {
        mainTitle.innerHTML+=`<span class="letter">${letter}</span>`   
    });     
};

export default textAnimation;
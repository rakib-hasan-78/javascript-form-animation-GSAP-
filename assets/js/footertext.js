const footerText= () => {
    
    const textName = document.getElementById('name');
    const words = textName.textContent.split(' ');
    textName.innerHTML ='';
    
    words.map((word, index) => {
        textName.innerHTML+= `<span class="test-${index+1} d-inline-block">${word}</span> `
    });
}

export default footerText;
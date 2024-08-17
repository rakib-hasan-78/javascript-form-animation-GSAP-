const colorize = (color, line, placeholder) => {
    gsap.to(line, {stroke:color, duration:.75});
    gsap.to(placeholder, {color:color, duration:.75})
}

export default colorize;
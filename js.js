document.addEventListener('keydown', (event) => {
    console.log(event.key);

    switch (event.key) {
        case'ArrowLeft':
            document.querySelector('.spritesheet').setAttribute('direction', 'ArrowLeft');
            document.querySelectorAll('.parallax').forEach(element => {
                console.log(window.getComputedStyle(element).backgroundPositionX);
             element.style.setProperty('--startLeft', 2100-parseFloat(window.getComputedStyle(element).backgroundPositionX) + "px");
             element.style.setProperty('--targetLeft','0');
                element.classList.remove('backgroundLeft');
                element.classList.add('backgroundRight');
            })
            break;
        case'ArrowRight':
            document.querySelector('.spritesheet').setAttribute('direction', 'ArrowRight');
            document.querySelectorAll('.parallax').forEach(element => {
             element.style.setProperty('--startLeft',2100-parseFloat(window.getComputedStyle(element).backgroundPositionX) + "px");
             element.style.setProperty('--targetLeft','-2100px');
                element.classList.remove('backgroundRight');
                element.classList.add('backgroundLeft');
            })
            break;
    }
})


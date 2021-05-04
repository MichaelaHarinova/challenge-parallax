document.addEventListener('keydown', (event) => {
    //  console.log(event.key);

    let spritesheet = document.querySelector('.spritesheet');
    let char = document.querySelector('.char');
    let parallax = document.querySelectorAll('.parallax');

    switch (event.key) {
        case'ArrowLeft':
            spritesheet.setAttribute('direction', 'ArrowLeft');
            parallax.forEach(element => {
                // console.log(window.getComputedStyle(element).backgroundPositionX);
                // trying to make the direction change smoother
                //     element.style.setProperty('--startLeft', 2100 - parseFloat(window.getComputedStyle(element).backgroundPositionX) + "px");
                //     element.style.setProperty('--targetLeft', '0');
                element.classList.remove('backgroundLeft');
                element.classList.add('backgroundRight');
            })
            break;
        case'ArrowRight':
            spritesheet.setAttribute('direction', 'ArrowRight');
            parallax.forEach(element => {
                //     element.style.setProperty('--startLeft', 2100 - parseFloat(window.getComputedStyle(element).backgroundPositionX) + "px");
                //     element.style.setProperty('--targetLeft', '-2100px');
                element.classList.remove('backgroundRight');
                element.classList.add('backgroundLeft');
            })
            break;
        case'ArrowUp':
            let jumpUp = false;

            if (jumpUp === false) {
                function jump() {
                    char.classList.remove('jump');
                    setTimeout(() => {
                        char.classList.add('jump')
                    }, 1)
                }

                jump();
            }
            return false;
    }
})



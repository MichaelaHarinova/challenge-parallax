document.addEventListener('keydown', (event) => {
    //  console.log(event.key);

    let spritesheet = document.querySelector('.spritesheet');
    let char = document.querySelector('.char');
    let parallax = document.querySelectorAll('.parallax');
    let dragon = document.querySelector('.dragon');
    let spriteDragon = document.querySelector(".spritesheetD");

    switch (event.key) {
        case'ArrowLeft':
            spritesheet.setAttribute('direction', 'ArrowLeft');
            spriteDragon.setAttribute('direction','ArrowLeft');
            parallax.forEach(element => {
                element.classList.remove('backgroundLeft');
                element.classList.add('backgroundRight');
            })
            break;
        case'ArrowRight':
            spritesheet.setAttribute('direction', 'ArrowRight');
            spriteDragon.setAttribute('direction','ArrowRight');
            parallax.forEach(element => {
                element.classList.remove('backgroundRight');
                element.classList.add('backgroundLeft');
            })
            break;
        case'ArrowUp':
            let jumpUp = false;

            if (jumpUp === false) {
                function jump() {
                    char.classList.remove('jump');
                    char.style.animation = '';
                    char.style.animation = ' jump 900ms';
                    char.classList.add('jump')
                }
                jump();
            }
            return false;
    }
})



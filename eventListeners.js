window.addEventListener('keydown', (event) => {

    switch (event.key) {
        case 'd' :
        keys.d.pressed = true;
        break
    }
    switch (event.key) {
        case 'a' :
        keys.a.pressed = true;
    }
    switch (event.key) {
        case 'w' :
         player.velocity.y = -10
    }
})

window.addEventListener('keyup', () => {
    switch(event.key) {
        case 'd':
            keys.d.pressed = false;
            break
    }
    switch(event.key) {
        case 'a' :
        keys.a.pressed = false;
    }
})

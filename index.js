const canvas = document.querySelector('canvas');
//create a context variable, using c for context
const c = canvas.getContext('2d');
//create a 16x9 ratio for the canvas
canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;
//draw a rectangle with context, takes in arguments of x,y,width, height
//place color for rect to see on black background
class Sprite {
    constructor({position, imageSrc}) {
    this.position = position;
    this.image = new Image()
    this.image.src = imageSrc;
    }
    draw() {
        if (!this.image) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        this.draw()
    }
}


class Player {
    constructor(position) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 1,
        }
        this.height = 100;
        this.width = 100;

    }
        draw() {
            c.fillStyle = 'red';
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        update() {
            this.draw()

            this.position.x += this.velocity.x
            this.position.y += this.velocity.y
            if(this.position.y + this.height + this.velocity.y < canvas.height - 50) this.velocity.y += gravity
            else this.velocity.y = 0;
        }
    }

const player = new Player({
    x: 0,
    y: 0,
})
const keys = {
    d: {
        pressed: false,
    },
    a: {
        pressed: false,
    },

}
//move into new file for background
const skyBackground = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './images/background.png'
})
const ground = new Sprite({
    position: {
        x: 0,
        y: 470,

    },

    imageSrc: './images/ground-tile.png'
})

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
//everything between save and restore will only run once and not continue in the animation loop
    c.save()
    c.scale(4, 4)
    skyBackground.update()

    c.restore()
    ground.update()

    player.update();
    player.velocity.x = 0
    if(keys.d.pressed) player.velocity.x = 4;
    else if(keys.a.pressed) player.velocity.x = -4
}

animate();

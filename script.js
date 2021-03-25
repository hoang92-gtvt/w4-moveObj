/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 20;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function () {
        this.left -= 20;

    }
    this.moveBottom = function () {
        this.top += 20;
    }
    this.moveTop = function () {
        this.top -= 20;
    }
}

var hero = new Hero('pikachu.png', 30, 30, 200);


var start1 = function () {
    console.log(1)

    if (hero.left < window.innerWidth - hero.size && hero.top <= 30 ) {
        hero.moveRight();
    } else if (hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveBottom();
    } else if (hero.left >= 0 && hero.top >= window.innerHeight - hero.size) {
        hero.moveLeft();
    } else if (hero.left <= 0 && hero.top > 0) {
        hero.moveTop();
    }


    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start1, 100);
}
start1();


let item = 0
let randomx = 0
let randomy = 0
input.onButtonPressed(Button.A, function () {
    while (item <= 24) {
        randomx = randint(0, 4)
        randomy = randint(0, 4)
        if (!(led.point(0, 0))) {
            led.plot(randomx, randomy)
            item += 3
            basic.pause(100)
        }
    }
})

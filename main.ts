basic.forever(function () {
    for (let i = 0; i <= 8; i++) {
        for (let j = 0; j <= 4; j++) {
            led.plot(4 - j, 4 - (i - j))
        }
        basic.pause(500)
    }
    basic.clearScreen()
    for (let i = 0; i <= 8; i++) {
        for (let j = 0; j <= 4; j++) {
            led.plot(j, i - j)
        }
        basic.pause(500)
    }
    basic.clearScreen()
})

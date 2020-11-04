basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(4 - j, i)
            led.plot(4 - i, j)
        }
        basic.pause(500)
    }
    basic.clearScreen()
})

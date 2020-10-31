def on_forever():
    for x in range(1, 4):
        for y in range(4):
            basic.pause(200)
            led.plot(x, y)
basic.forever(on_forever)

input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
basic.forever(function () {
    led.setBrightness(0)
    if (input.lightLevel() > led.brightness()) {
        led.setBrightness(input.lightLevel())
    }
    basic.showString("" + (led.brightness()))
})

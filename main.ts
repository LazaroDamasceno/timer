let time = 0
input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(1000)
        time += 1
        basic.showNumber(time)
    }
})
input.onButtonPressed(Button.AB, function () {
    time = 0
    basic.showNumber(time)
})

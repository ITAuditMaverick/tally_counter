input.onButtonPressed(Button.A, function () {
    start += 1
})
input.onButtonPressed(Button.AB, function () {
    start = 0
})
input.onButtonPressed(Button.B, function () {
    start += -1
})
let start = 0
basic.showNumber(start)
basic.forever(function () {
    basic.showNumber(start)
})

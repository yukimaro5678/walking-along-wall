let RR = 0
let LL = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.forever(function () {
    LL = pins.digitalReadPin(DigitalPin.P2)
    RR = pins.digitalReadPin(DigitalPin.P11)
    if (LL == 1 && RR == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (LL == 0 && RR == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (LL == 1 && RR == 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})

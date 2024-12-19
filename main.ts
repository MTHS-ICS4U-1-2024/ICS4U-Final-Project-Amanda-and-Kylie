let DIAMETER = 0
let TRACK_LENGTH = 0
let HIGH_ANGLE = 0
let LOW_ANGLE = 0
let WALL_DISTANCE = 0
let sonoarping = 0
basic.forever(function () {
    DIAMETER = 31
    TRACK_LENGTH = 20
    HIGH_ANGLE = 270
    LOW_ANGLE = 45
    WALL_DISTANCE = 8
    basic.showIcon(IconNames.Happy)
    robotbit.StpCarMove(2, DIAMETER)
    sonoarping = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (sonoarping <= WALL_DISTANCE) {
        basic.showIcon(IconNames.Sad)
        for (let index = 0; index < 5; index++) {
            music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            robotbit.StpCarMove(-2, DIAMETER)
        }
        basic.showIcon(IconNames.Silly)
        music.play(music.stringPlayable("B A G B A G B C5 ", 500), music.PlaybackMode.UntilDone)
        robotbit.StpCarTurn(randint(LOW_ANGLE, HIGH_ANGLE), DIAMETER, TRACK_LENGTH)
        music.play(music.stringPlayable("B A G B A G C5 C ", 500), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        music.play(music.stringPlayable("E D C C - - - - ", 120), music.PlaybackMode.UntilDone)
        while (true) {
            basic.showLeds(`
                # # # # #
                . . . # .
                . . # . .
                . # . . .
                # # # # #
                `)
            basic.showLeds(`
                . # # # #
                . . . # .
                . . # . .
                . # # # #
                . . . . .
                `)
            basic.showLeds(`
                . # # # .
                . . # . .
                . # # # .
                . . . . .
                . . . . .
                `)
        }
    }
})

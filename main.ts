input.onButtonPressed(Button.A, function () {
    modus = 1
    höchste = 0
})
edubitIrBit.onIrSensorEvent(IrEventType.Rise, function () {
    höchste = 2
})
let modus = 0
let höchste = 0
höchste = 0
basic.forever(function () {
    if (modus == 1) {
    	
    } else if (modus == 2) {
    	
    } else {
    	
    }
})

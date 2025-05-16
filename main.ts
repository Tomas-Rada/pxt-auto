
radio.setGroup(234)
radio.setFrequencyBand(54)
radio.setTransmitSerialNumber(true)





let setNumber: number = 0
let p: boolean = false 
let x: number = 0
let y: number = 0
let x_l: number = 0
let y_l: number = 0
//nastavení kontroly
radio.onReceivedValue(function(name: string, value: number) {
    if (name === "njimok@<>" && p) {
        setNumber=value
    }
})
radio.onReceivedValue(function(name: string, value: number) {
    if
})

basic.forever(function () {




    // Kontrola osy X
    if (x > 100) {
        x_l = 3

    }
    else if (x > 60) {
        x_l = 2

    }
    else if (x > 30) {
        x_l = 1

    }
    //to do 
    else if (x > 0 && x < 0) {
        x_l = 0
    }
    else if (x < -100) {
        x_l = -3
    }
    else if (x < -60) {
        x_l = -2
    }
    else if (x < -30) {
        x_l = -1
    }


    // Kontrola osy Y
    if (y > 100) {
        x_l = 3
    }
    else if (y > 60) {
        x_l = 2
    }
    else if (y > 30) {
        x_l = 1
    }
    //to do
    else if (y > 0 && y < 0) {
        x_l = 0
    }
    else if (y < -100) {
        x_l = -3
    }
    else if (y < -60) {
        x_l = -2
    }
    else if (y < -30) {
        x_l = -1
    }
    radio.sendValue("X", x_l)
    radio.sendValue("Y", y_l)
    basic.pause(20)

})
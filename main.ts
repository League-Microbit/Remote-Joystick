let payload: radiop.JoyPayload = null
joystick.blockingRadioTransfer(radiop.DeviceClass.CUTEBOT)
joystick.initJoystick()
joystick.calibrate()
basic.forever(function () {
    payload = joystick.newJoyPayload()
})

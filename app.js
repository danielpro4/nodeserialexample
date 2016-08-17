var SerialPort = require("serialport");
var port = new SerialPort('/dev/cu.Bluetooth-Incoming-Port');

console.log(port);
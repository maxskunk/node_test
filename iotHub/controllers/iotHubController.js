'use strict';
var activeDevices = [];
// var mongoose = require('mongoose'),
//     Device = mongoose.model('Device');


exports.connect_device = function (req, res) {

    if (!req.body.deviceId) {
        res.send("Connection Requires Valid Device Id");
        console.log("Connection Denied for Invalid Device Id");
    } else {
        console.log('Connection From Device: ' + req.body.deviceId);
        res.json({ "internalId": activeDevices.length });
        activeDevices.push(req.body.typeId);
        console.log("Active Devices: " + activeDevices.length);
    }

};
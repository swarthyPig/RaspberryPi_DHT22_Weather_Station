var cheerio = require('cheerio');
var request = require('request');
var io = require('socket.io').listen(3000, function (req, res) {
    console.log('Listening on port 3000');
});

// MongoDB
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/iot'); // DB name
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("mongo db connection OK.");
});
// Schema
var iotSchema = new Schema({
    date : String,
    temperature : String,
    Fahrenheit : String,
    humidity : String
});
// Display data on console in the case of saving data.
iotSchema.methods.info = function () {
    var iotInfo = this.date
    ? "date: " + this.date +", Temp: " + this.temperature 
    + ", Fahr: " + this.Fahrenheit + ", Humi: " + this.humidity 
    : "I don't have a date"
    console.log("iotInfo: " + iotInfo);
}

var dht22data = [];
var dateStr = '';
var CelsiusData = '';
var FahrenheitData = '';
var HumidityData = '';

var Sensor = mongoose.model("Sensor", iotSchema);  // sensor data model

var url = 'http://127.0.0.1:5000/'; // Flask address

var Celsius = '';

function getCelsius() {

    request(url, function (err, res, body) {

        var $ = cheerio.load(body);

        $('#data .Celsius').each(function () {
            Celsius = $(this).text().substring(26, 31);
        });
    });
    return Celsius;
}

var Fahrenheit = '';

function getFahrenheit() {

    request(url, function (err, res, body) {

        var $ = cheerio.load(body);

        $('#data .Fahrenheit').each(function () {
            Fahrenheit = $(this).text().substring(29, 34);
        });
    });
    return Fahrenheit;
}

var Humidity = '';

function getHumidity() {

    request(url, function (err, res, body) {

        var $ = cheerio.load(body);

        $('#data .Humidity').each(function () {
            Humidity = $(this).text().substring(12, 17);
        });
    });
    return Humidity;
}


function getDateString() {

    var time = new Date().getTime();
    var datestr = new Date(time + 32400000).toISOString().replace(/T/, ' ').replace(/Z/, '');

    return datestr;
}


io.sockets.on('connection', function (socket) {

    socket.on('message', function (msg) {
        console.log(msg);
    });

    socket.on('disconnect', function () {});
});

setInterval(function () {
    dateStr = getDateString();
    CelsiusData = getCelsius();
    FahrenheitData = getFahrenheit();
    HumidityData = getHumidity();
    dht22data[0] = dateStr; // Date
    dht22data[1] = CelsiusData; // temperature data
    dht22data[2] = FahrenheitData; // Fahrenheit data
    dht22data[3] = HumidityData; // humidity data
    
    var iot = new Sensor({date:dateStr, temperature:CelsiusData, Fahrenheit:FahrenheitData, humidity:HumidityData});
        // save iot data (document) to MongoDB
        iot.save(function(err, iot) {
            if(err) return handleEvent(err);
            iot.info();  // Display the information of iot data  on console.
        })
    
    io.sockets.emit('message', dht22data);
    //console.log("Raspberry Pi," + dht22data);
}, 3000);

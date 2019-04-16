var router = express.Router();

// MongoDB
var mongoose = require('mongoose');
var Schema = mongoose.Schema;  // Schema object
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
    fahrenheit : String,
    humidity : String
});
var Sensor = mongoose.model("Sensor", iotSchema);  // sensor data model

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index',{ title : 'RaspberryPi sensor'});
});
router.get('/iot', function (req, res) {
    Sensor.find(function(err, data) {
        res.json(data);
    });
});
// find data by id
router.get('/iot/:id', function (req, res) {
    Sensor.findById(req.params.id, function(err, data) {
        res.json(data);
    });
});

module.exports = router;

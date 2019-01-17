//setup mqtt connection to broker
var mqtt = require('mqtt')
const url = 'mqtt://localhost:1883'
var client = mqtt.connect(url, { will: { topic: 'presence', payload: 'Server is offline' } })

client.on('connect', function () {
    client.subscribe('presence', function (err) {
        if (!err) {
            client.publish('presence', 'Server is online');
        }
    })
})

//get input from console
var stdin = process.openStdin();

stdin.addListener("data", function (d) {
    let message = d.toString().trim();
    console.log("you entered: [" + message + "]");
    client.publish('presence', message);
});


var mqtt = require('mqtt')
const url = 'mqtt://localhost:1883'
var client = mqtt.connect(url)

client.on('connect', function () {
    client.subscribe('presence', function (err) {
        if (!err) {
            client.publish('presence', 'Hello mqtt')
        }
    })
})

client.on('message', function (topic, message) {
    console.log(message.toString())
    // client.end()
})
# Reference Design for Server/ Client Communication using MQTT

### Broker
#### Must have Docker installed
```
docker run -ti -p 1883:1883 -p 9001:9001 toke/mosquitto
```

### Client
```
node ./client/client.js
```
### Server
```
node ./server/server.js
```

# Usage
The server is configured to publish 'Server is online' when connecting and 'Server is offline' when disconnecting.
The server is also configured to listen to the stdin (command line input) and publish any messages sent through the command line.
<br>
The Client subscribes to the same topic, and prints out any messages consumed from the topic.
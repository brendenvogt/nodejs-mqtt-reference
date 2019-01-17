# Broker using docker container
https://hub.docker.com/r/toke/mosquitto/

## Run command
```
docker run -ti -p 1883:1883 -p 9001:9001 toke/mosquitto
```

## Connection Url
```
mqtt://localhost:1883
```
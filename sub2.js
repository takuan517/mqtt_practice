var mqtt = require('mqtt');
var client = mqtt.connect({
    host: '',
    port: 18230,
    clientId: 'mqtt.subscriber',
});

client.on('connect', function(){
    console.log('subscriber.connected.');
});

client.subscribe("topic/01", function(err, granted){
    console.log('subscriber.subscribed.');
});

client.on('message', function(topic, message){
    console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
});
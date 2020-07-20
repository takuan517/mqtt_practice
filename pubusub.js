var mqtt = require('mqtt');
var client = mqtt.connect({
    host: '',
    port: 18230,
    clientId: 'mqtt.subscriber',
});

client.on('connect', function(){
    console.log('connected.');
});

client.subscribe("topic/01", function(err, granted){
    console.log('subscriber.subscribed.');
});

client.on('message', function(topic, message){
    console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
});

setInterval(function(){
    //var message = Date.now().toString()/
    var message = "Hello!"
    client.publish("topic/01", message);
    console.log('publisher.publish:', message);
  }, 1000);
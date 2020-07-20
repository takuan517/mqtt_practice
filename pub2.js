var mqtt = require('mqtt');
var client = mqtt.connect({
    host: '',
    port: 18230,
    clientId: 'mqtt.publisher',
});

client.on('connect', function(){
    console.log('publisher.connected.');
  });
  
  setInterval(function(){
    //var message = Date.now().toString()/
    var message = "Hello!"
    client.publish("topic/01", message);
    console.log('publisher.publish:', message);
  }, 1000);
const EventEmitter = require('events')

class MyEvent extends EventEmitter {

}

const myEventInstance = new MyEvent()

// Register event
myEventInstance.on('connect', function(...argv){
    console.log("connect emitted", "argv:", argv)
})

// Execute event
myEventInstance.emit('connect', 'My name', 'Bob')
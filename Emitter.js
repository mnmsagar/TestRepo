const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('order-pizza', (size,topping)=>{
    console.log(`order received , baking a pizza with ${size} and ${topping} topping`);
})


emitter.on('order-pizza',(size)=>{
    if(size === 'large'){
        console.log("Serving complimentary drink");
    }
});

emitter.emit('order-pizza', 'large', 'mushroom');

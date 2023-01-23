import events from 'events';

const event = new events();

event.on('sayMyName', ()=>{
    console.log('my name is shashank')
})

event.on('sayMyName', ()=>{
    console.log('my name is Tripathi')
})
event.on('sayMyName', ()=>{
    console.log('my name is xyz')
})
//event fired
//event has to be first defined then fired
// we can fire multiple events using same name as done above


//event1
event.emit('sayMyName')



event.on('checkPage', (sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)
})


//event2
event.emit('checkPage', 200, 'ok')



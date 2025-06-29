const fs = require('fs');
fs.readFile('./readme.md', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  process.nextTick(() => console.log('next tick from file read , 5'));
  console.log(data);
});
fs.readFile('./readme.md', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  process.nextTick(() => console.log('next tick from file read 2 , 6'));
  console.log('2', data);
});
process.nextTick(() => console.log('Next tick ,1'));
Promise.resolve().then(() => console.log('Promise 1 ,2'));
setTimeout(() => console.log('Timer 1 , 3'), 0);
setImmediate(() => console.log('Immediate callback , 4'));

for (let i = 0; i < 10000000000; i++) {} // > 5s
// first  read the module and then trigger the the read file and completed the code till 17th line but this will not execute immedaite
// but it is reading completed and the next tick occurs it executed and then promise callback comes and it executed completely and then timer comes and now libuv contains cb of the timer and readfile cb's which is two
// as of now i/o queue is empty so the pending callbacks of the readfile will execute later cb of timer will execute now and then setimmediate come but as polling happends check queue contains cb of setimmediate and execute this
// now in the next iteration the deffered calllbacks of the i/o queue contians the cb of that two read file callbacks comes from the libuv and inside in the i/o queue and now first check the next tick queue, promise queue and the timer queue and then i/o queue which contains the first cb of read file
// and this cb  register the nexttick queue cb here and register there adn the execute this and then again check the promise which is empty and completed the first cb of readfile and now comes second readfile cb comes and then ergister the next tick cb and the execute it after checking and check the promise queue which is currently empty and the code is completed

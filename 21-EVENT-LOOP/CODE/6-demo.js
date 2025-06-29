const fs = require('fs');

fs.readFile('./readme.md', 'utf8', (err, data) => {
  // I/O queue - Callback queue
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

process.nextTick(() => console.log('Next tick'));
Promise.resolve().then(() => console.log('Promise 1'));
setTimeout(() => console.log('Timer 1'), 0);
setImmediate(() => console.log('Immediate callback'));

for (let i = 0; i < 10000000000; i++) {} // > 5s
// first read the the fs odule and then triggered the readfile and then move ahead there is 5 queue nexttick,promise,tiemr queue,check queue, i/o queue
// so after trigger the reading the file move ahead and resolve the next tick and then resolve the promise by register it by .then and then ersolve it immediately as it alread
// resolved promise and then settimeout timer is come and execute it and then setiimmetate  cb4 are in check queue and then loop halts btw this time file is read in the libuv wherereadfile and cb of the settimeout is there respectively execute according to priorities and now after reading file we i/o queue which currently is empty and then polling
// happens, pending callbacks aredefferd to the next iteration which is this i/o queue callback and now execute the settimeout
// callback  and the in the next iteration we first check microtask queue  like next tick and promise and then timer cb and then we see the i/o which is fill by the timer provided by the libuv and execute this read file cb and then we again cvheck the promise and next tick queue which is currentlu empty and then we further proceed to check the check queue and then
// code end

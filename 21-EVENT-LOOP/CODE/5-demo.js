console.log('Start');

setTimeout(() => {
  process.nextTick(() => console.log('Next Tick 2')); // cb will be waiting in nextTick queue
  process.nextTick(() => console.log('Next Tick 3'));
  process.nextTick(() => console.log('Next Tick 4'));
  Promise.resolve().then(() => console.log('Promise 2'));
  Promise.resolve().then(() => console.log('Promise 3'));
  Promise.resolve().then(() => console.log('Promise 4'));
  for (let i = 0; i < 10000000000; i++) {}
}, 0); // cb will be waiting in timer queue

Promise.resolve().then(() => console.log('Promise 1')); // cb will be waiting in promise queue

process.nextTick(() => console.log('Next Tick 1')); // cb will be waiting in nextTick queue

setTimeout(() => console.log('Timer 2'), 0); // cb will be waiting in timer queue

console.log('end');
// when cb of the settimeout come it register the microtask queue cb first and clear them before any timer which is last one will execute last whenever the cb of timer come we see the microstask queue is empty or not but
// in this case the microtask queue is not empty as the settimeout registers the nexttick cb and promise callback resp.

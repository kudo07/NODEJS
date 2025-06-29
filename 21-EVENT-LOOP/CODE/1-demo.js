let a = 10;
Promise.resolve().then(() => console.log('Printing from promise'));
process.nextTick(() => console.log('Printing from next tick'));
process.nextTick(() => console.log('Printing from next tick1'));
process.nextTick(() => console.log('Printing from next tick 2'));
setTimeout(() => console.log('printing from timer'), 0);
for (let i = 0; i < 10000000000; i++) {}
console.log(a);

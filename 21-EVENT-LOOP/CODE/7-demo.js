const fs = require('fs');

fs.readFile('./readme.md', 'utf8', (err, data) => {
  // I/O queue - Callback queue
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

setTimeout(() => console.log('Timer 1'), 0);
// this one is incertain as the context switch between the settimout timer with the read file callback because of cb of settimeout is 1 ms before and after 1 ms can change the order becasue of context switch if before complete the 1ms and after 1 sec

const fs = require('fs');


// async reading, takes in callback
fs.readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(data);
    }
});

// sync reading, no callback, just returns result
const second = fs.readFileSync('./content/second.txt', 'utf-8');
console.log(second);


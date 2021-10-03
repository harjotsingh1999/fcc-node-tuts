const path = require('path');

console.log(path.sep);

// resolve gves the absolute path
const absolute = path.resolve(__dirname, 'app.js');
console.log(absolute);
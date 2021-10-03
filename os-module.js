const os = require('os');

const user = os.userInfo()
console.log(user);

// system uptime n secs
console.log(`system uptimme = ${os.uptime()} secs`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);
const fs= require('fs');
const util= require('util');


// this will do what is done below, make a custom promise
const readFilePromise= util.promisify(fs.readFile);
const appendFilePromise= util.promisify(fs.appendFile);

//custom promise
const getText= (path)=> {
    return new Promise((resolve, reject) => {
        fs.readFile(path,'utf-8', (err, data)=>{
            if(err)
                reject(err);
            else resolve(data);
        });
    });
};

// another way is to directly get promises from fs module as shown below
// fs.promises.readFile("path")

// getText("./content/first.txt")
//     .then((result)=> console.log(result))
//     .catch((err)=>console.error(err));

// using the custom promise here
const start= async()=>{
    try{
        const first= await getText("./content/first.txt");
        const second= await getText("./content/second.txt");
        console.log(first, second);
    }
    catch(error){
        console.error(error);
    }
}

// using the promisify promise here
const start2= async()=>{
    try{
        // will have to add eht encoding here when we use the promisify function
        const first= await readFilePromise("./content/first.txt", "utf-8");
        const second= await readFilePromise("./content/second.txt", "utf-8");
        console.log(first, second);
        await appendFilePromise('./content/third.txt', `ho-ho added ${first} ${second}`);
    }
    catch(error){
        console.error(error);
    }
}

start2();
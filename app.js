const rookout = require('rookout');
rookout.start({
    token: '23064ede612d803b2c15d88723b1fff6fc927dce22d8efbf878a322625927641',
    labels: {
        env: 'dev'
    }
})



const myArgs = process.argv.slice(2);
const myPort=myArgs[0] ? myArgs[0] : 3000;


const express = require('express')
const app = express()
const port = myPort
let counter=0;

app.get('/', (req, res) => {
    counter++;
    res.send(`Hello World! ${counter}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


function sayHelloA(){
    counter++;
    console.log(`HelloA ${counter}`)
}


function sayHelloB(){
    counter++;
    console.log(`HelloB ${counter}`)
}




setInterval(sayHelloA, 5000);
setInterval(sayHelloB, 10000);
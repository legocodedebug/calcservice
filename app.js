const rookout = require('rookout');
rookout.start({
    token: '23064ede612d803b2c15d88723b1fff6fc927dce22d8efbf878a322625927641',
    labels: {
        env: 'dev'
    }
})
const express = require('express')
const app = express()
const port = 3000
let counter=0;

app.get('/', (req, res) => {
    counter++;
    res.send(`Hello World! ${counter}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


function sayHelloA(){
    console.log(`HelloA ${port}`)
}


function sayHelloB(){
    console.log(`HelloB ${port}`)
}


setInterval(sayHelloA, 5000);
setInterval(sayHelloB, 7000);
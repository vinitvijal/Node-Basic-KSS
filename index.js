// Boilerplate code

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({
    origin: '*'
}))


app.get('/', (req, res) => {
    console.log('Home Page Requested');
    res.send({'message':'Hello World!'});
    console.log(req)

});


app.get('/user', (req, res) => {
    res.send('User Page')
})

// app.get('/sum/:num1/:num2', (req, res) => {
//     var num1 = parseInt(req.params.num1);
//     var num2 = parseInt(req.params.num2);
//     var sum = num1 + num2;

//     res.send('Sum is: ' + sum);
// });

// app.get('/sub/:num1/:num2', (req, res) => {
//     var num1 = parseInt(req.params.num1);
//     var num2 = parseInt(req.params.num2);
//     var sum = num1 - num2;

//     res.send('Subtraction is: ' + sum);
// });

// app.get('/mul/:num1/:num2', (req, res) => {
//     var num1 = parseInt(req.params.num1);
//     var num2 = parseInt(req.params.num2);
//     var sum = num1 * num2;

//     res.send('Multiplication is: ' + sum);
// });

// app.get('/div/:num1/:num2', (req, res) => {
//     var num1 = parseInt(req.params.num1);
//     var num2 = parseInt(req.params.num2);
//     var sum = num1 / num2;

//     res.send('Division is: ' + sum);
// });


app.get('/calculate/:op/:a/:b', (req, res) => {
    var op = req.params.op;
    var a = parseInt(req.params.a)
    var b = parseInt(req.params.b)
    if (op == 'sub'){
        res.send({'result':a-b})
    }else if (op == 'sum'){
        res.send({'result':a+b})
    }else if (op == 'mul'){
        res.send({'result':a*b})
    }else if (op == 'div'){
        res.send({'result':a/b})
    }else {
        res.send("Wrong Input Taken Please Check URL")
    }
})


app.get('/cal/:op/:a/:b', (req, res) => {
    var op = req.params.op;
    var a = parseInt(req.params.a)
    var b = parseInt(req.params.b)
    if (op == 'sub'){
        res.send({'result':a-b})
    }else if (op == 'sum'){
        res.send(`Addition is ${a+b}`)
    }else if (op == 'mul'){
        res.send(`Multiplication is ${a*b}`)
    }else if (op == 'div'){
        res.send(`Division is ${a/b}`)
    }else {
        res.send("Wrong Input Taken Please Check URL")
    }
});



app.listen(3000, ()=> {
    console.log('server is running on port 3000');
});


require('dotenv').config()
// console.log(process.env.PORT) 

const express = require('express')

const app = express() // creating instance . 

app.get('/', (req, res) => { // If you get request "/" :--- 
  res.send('Hello World!'); // Ye responce send karega . 
});
app.get('/twitter' , (req , res )=>{
  res.send('This is Twitter!');
});
app.get('/login' , (req , res )=>{
  res.send('<h1>Please login at Araham Website !</h1>');
});
app.get('/youtube' , (req , res )=>{
  res.send('<h1>Welcome to Youtube !</h1>');
});

app.listen(process.env.PORT, () => { // Ye is port(port 3000) par server ko listen(on) kardega . 
  console.log(`Example app listening on port ${process.env.PORT}`); // Ye text server start hone par show karega . 
})




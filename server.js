const express=require('express');
const app=express();
const morgan =require('morgan');
require('dotenv').config();

//mideelware 
app.use(morgan('dev'));


//routing
app.get('/home',(req,res)=>{
    res.send("you are connected")
});

//embedded link 
const inventory = [
  { name: 'Candle', qty: 4 },
  { name: 'Cheese', qty: 10 },
  { name: 'Phone', qty: 1 },
  { name: 'Tent', qty: 0 },
  { name: 'Torch', qty: 5 }
];

app.get('/', (req, res) => {
    res.render('home.ejs', {
        inventory: inventory
    });
});
app.get('/:itemId', (req, res) => {
  const index = req.params.itemId;
  // render show.ejs, and pass it a single item object 
  res.render('show.ejs', {
    item: inventory[index]
  });
});


app.listen(3000,()=>{
    console.log('listen yto port 3000')
});

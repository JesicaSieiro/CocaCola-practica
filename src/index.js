const express=require('express');
const app= express();
const path= require('path');

//configuracion para que el servidor pueda entender los datos del mail
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, ()=>{
    console.log('Server in port 3000');
});
'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean2',(err, res) =>{
    if(err){
        throw err;
    }else{
        console.log("La base de datos esta funcionando");

        app.listen(port, function(){
            console.log("El servidor esta esuchando en http://localhost:"+port);
        });
    }
});
const express = require('express');
const app =express();
const mongoose =require('mongoose');
const bodyParser=require('body-parser');
const url='mongodb+srv://usuario_adm:try79&*14@clusterapi.rqgip.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit';
const options={reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, userNewUrlParser: true};
mongoose.connect(url);
//mongoose.set('useCreateIndex', true);
mongoose.connection.on('error',(err)=>{
console.log('Erro de conexão com o banco de dados:'+err);
})

mongoose.connection.on('disconnected',()=>{
    console.log('Aplicação desconectada do banco de dados')
    })

    mongoose.connection.on('connected',()=>{
        console.log('Aplicação conectada com sucesso')
        })

    ///body parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

const indexRoute =require('./routes/index');
const usersRoute =require('./routes/users');


app.use('/',indexRoute);
app.use('/users', usersRoute);


app.listen(3000);
module.exports = app;

//sttring de conexao
//mongodb+srv://usuario_adm:<password>@clusterapi.rqgip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


/* Pasta para incluir o Mongoose e conectá-lo com o MongoDB  */

const mongoose = require('mongoose');

/* Constante que recebe como declaração a URL do banco de dados onde estão armazenadas as tarefas */
const url = 'mongodb+srv://erosys:XvsfmmjLXTjgk4lb@cluster0.rbho5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 

//url banco de dados na nuvem: 'mongodb+srv://EroSoftTask:EroSoftTask@erosofttask.rbho5.mongodb.net/EroSoftTask?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;
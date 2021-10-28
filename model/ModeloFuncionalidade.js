/* Pasta para definir quais e como serão armazenadas as informações no banco de dados */

const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ModeloFuncionalidade = new Schema({

   /*Dentro do Schema são definidas as variaveis, seus determinados tipos e também se pode
   determinar se elas são requiridas ou não */
   titulo:  {type: String},
   modulo:  {type: String},
   description: {type: String},
   URLimagem:  {type: Object} 

});

module.exports = mongoose.model('Funcionalidades', ModeloFuncionalidade);


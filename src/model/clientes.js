const mongoose = require('mongoose');

const ClientesSchema = new mongoose.Schema({
    
    nome: { type: String },
    email: {type: String, required: true},
    cpf: {type: Number},
    dataNascimento: { type: Date },
    estadoCivil: { type: String},
    telefone: {type: Number},
    comprou: {type: Boolean},
    cep: {type: String},
    logradouro: {type: String}
}, {
    versionKey: false
})

const Clientes = mongoose.model('Clientes', ClientesSchema);

module.exports = Clientes;
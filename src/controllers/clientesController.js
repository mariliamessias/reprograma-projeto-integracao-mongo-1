const Clientes = require('../model/clientes');
const Joi = require('joi');

exports.get = (req, res) => {
    const filter = req.query
    Clientes.find(filter, function (err, clientes) {
        if (err) res.status(500).send(err);
        res.status(200).send(clientes);
    })
}

exports.post = function (req, res) {
    let cliente = new Clientes(req.body);

    cliente.save(function (err) {
        if (err) res.status(500).send(err);
        else {
            res.status(201).send({
                status: true,
                mensagem: "Cliente incluído com sucesso"
            });
        }
    });
}

exports.getCompradores = (req, res) => {
    Clientes.find(function (err, clientes) {
        if (err) res.status(500).send(err);

        const clientesCompradores = clientes.filter(cliente => cliente.comprou == true)
        const clientesRetorno = clientesCompradores.map(cliente => {
            return {
                nome: cliente.nome,
                email: cliente.email
            }
        })

        res.status(200).send(clientesRetorno);
    })
}

exports.getByCpf = (req, res) => {
    const cpf = req.params.cpf;
    Clientes.find({ cpf }, function (err, cliente) {
        if (err) res.status(500).send(err);
        res.status(200).send(cliente);
    })
}

exports.updateCliente = (req, res) => {

    if (!validaFormulario(req.body)) return res.status(400).send({ mensagem: "campos inválidos" });

    Clientes.update(
        { cpf: req.params.cpf },
        { $set: req.body },
        { upsert: true },
        function (err) {
            if (err) return res.status(500).send(err);
            res.status(200).send({ mensagem: "Atualizado com sucesso!" });
        })

}

exports.deleteCliente = (req, res) => {
    const cpf = req.params.cpf;

    Clientes.findOne({ cpf }, function (err, cliente) {
        if (err) res.status(500).send(err);
       
        if(!cliente) return res.status(200).send({mensagem: "infelizmente não localizamos o cliente para remover"});
        
        cliente.remove(function (err){
            if (!err) {
                res.status(200).send({ message: 'Cliente removido com sucesso...' });
              } 
        })
    })

}

const validaFormulario = (campos) => {

    const schema = {
        nome: Joi.string(),
        email: Joi.string(),
        cpf : Joi.number(),
        dataNascimento: Joi.date(),
        estadoCivil: Joi.string(),
        telefone: Joi.number(),
        comprou: Joi.boolean()
    }

    const validation = Joi.validate(campos, schema);

    if (validation.error) {
        return false;
    }

    return true;

}
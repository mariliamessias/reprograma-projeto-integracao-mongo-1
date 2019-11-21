const Clientes = require('../model/clientes');

exports.get = (req, res) => {
    Clientes.find(function (err, clientes) {
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

        const clientesCompradores = clientes.filter(cliente => cliente.comprou == true )
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
    Clientes.update(
        { cpf: req.params.cpf },
        { $set: req.body },
        { upsert: true },
        function (err) {
            if (err) return res.status(500).send(err);
            res.status(200).send({ message: "Atualizado com sucesso!" });
        })
}

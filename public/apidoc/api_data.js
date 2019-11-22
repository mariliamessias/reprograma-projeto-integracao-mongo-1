define({ "api": [
  {
    "type": "delete",
    "url": "/clientes/{cpf}",
    "title": "",
    "group": "Clientes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF do cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "clientes",
            "description": "<p>Mensgem de sucesso ao excluir um cliente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n{ message: 'Cliente removido com sucesso...' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clientesRoute.js",
    "groupTitle": "Clientes",
    "name": "DeleteClientesCpf"
  },
  {
    "type": "get",
    "url": "/clientes/compradores",
    "title": "",
    "group": "Clientes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "clientes",
            "description": "<p>Lista de Clientes compradores</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n[ \n{\n    \"nome\": \"Cindy \",\n    \"email\": \"Cindy@gmail.com\"\n},\n{\n    \"nome\": \"Aline Cardoso\",\n    \"email\": \"alineProgramadoraSenior@outlook.com\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clientesRoute.js",
    "groupTitle": "Clientes",
    "name": "GetClientesCompradores"
  },
  {
    "type": "get",
    "url": "/clientes/{cpf}",
    "title": "",
    "group": "Clientes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF do cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "clientes",
            "description": "<p>Lista de Clientes compradores</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n[{\n    \"email\": \"Cindy@gmail.com\",\n    \"nome\": \"Cindy \",\n    \"cpf\": 2234567890,\n    \"dataNascimento\": \"1992-04-03T03:00:00.000Z\",\n    \"estadoCivil\": \"Solteira\",\n    \"telefone\": 444456789,\n    \"comprou\": true\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clientesRoute.js",
    "groupTitle": "Clientes",
    "name": "GetClientesCpf"
  },
  {
    "type": "post",
    "url": "/clientes",
    "title": "",
    "group": "Clientes",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "dataNascimento",
            "description": "<p>Data de Nascimento do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estadoCivil",
            "description": "<p>Estado Civil do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>Telefone do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "comprou",
            "description": "<p>Status do cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "clientes",
            "description": "<p>Mensgem de sucesso ao incluir um cliente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 201 Created\n{\n    status: true,\n    mensagem: \"Cliente incluído com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clientesRoute.js",
    "groupTitle": "Clientes",
    "name": "PostClientes"
  },
  {
    "type": "put",
    "url": "/clientes/{cpf}",
    "title": "",
    "group": "Clientes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF do cliente.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "dataNascimento",
            "description": "<p>Data de Nascimento do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estadoCivil",
            "description": "<p>Estado Civil do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>Telefone do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "comprou",
            "description": "<p>Status do cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "clientes",
            "description": "<p>Mensgem de sucesso ao alterar um cliente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n{ mensagem: \"Atualizado com sucesso!\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clientesRoute.js",
    "groupTitle": "Clientes",
    "name": "PutClientesCpf"
  },
  {
    "type": "get",
    "url": "/clientes",
    "title": "",
    "group": "Clientes__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "clientes",
            "description": "<p>Lista de Clientes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n[{\n    \"email\": \"Cindy@gmail.com\",\n    \"nome\": \"Cindy \",\n    \"cpf\": 2234567890,\n    \"dataNascimento\": \"1992-04-03T03:00:00.000Z\",\n    \"estadoCivil\": \"Solteira\",\n    \"telefone\": 444456789,\n    \"comprou\": true\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clientesRoute.js",
    "groupTitle": "Clientes__",
    "name": "GetClientes"
  }
] });

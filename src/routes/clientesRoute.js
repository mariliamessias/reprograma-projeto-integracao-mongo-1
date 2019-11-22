const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

// Routes
/**
 * @swagger
 * /clientes:
 *  get:
 *    description: Rota para fazer o retorno de todos os clientes
 *    responses:
 *      '200':
 *        description: Resposta de sucesso
 */
router.get("/", controller.get)

/**
 * @swagger
 * /clientes/compradores:
 *  get:
 *    description: Rota para fazer o retorno dos clientes compradores
 *    responses:
 *      '200':
 *        description: Resposta de sucesso
 */

router.get("/compradores", controller.getCompradores)

/**
 * @swagger
 * /clientes/{cpf}:
 *   get:
 *     summary: Buscar cliente pelo CPF
 *     parameters:
 *       - in: path
 *         name: cpf
 *         schema:
 *           type: integer
 *         required: true
 *         description: Número do CPF do cliente
 *     responses:
 *      '200':
 *        description: Resposta de sucesso
 */

router.get("/:cpf", controller.getByCpf)

/**
* @swagger
* /clientes:
*   post:
*      parameters:
*        - in: body
*          name: cliente
*          description: dados do cadastro do cliente
*          schema:
*            properties:
*              nome:
*                type: string
*              email:
*                type: string
*              cpf:
*                type: integer
*              dataNascimento:
*                type: string
*              estadoCivil:
*                type: string
*              telefone:
*                type: integer
*              comprou:
*                type: boolean
*      responses:
*        200:
*          description: response test
*/

router.post("/", controller.post)

/**
* @swagger
* /clientes/{cpf}:
*   put:
*     summary: Alterar cliente pelo CPF
*     parameters:
*        - in: path
*          name: cpf
*          schema:
*            type: integer
*          required: true
*          description: Número do CPF do cliente
*        - in: body
*          name: cliente
*          description: dados do cadastro do cliente
*          schema:
*            properties:
*              nome:
*                type: string
*              email:
*                type: string
*              cpf:
*                type: integer
*              dataNascimento:
*                type: string
*              estadoCivil:
*                type: string
*              telefone:
*                type: integer
*              comprou:
*                type: boolean
*     responses:
*      '200':
*        description: Resposta de sucesso
*/

router.put("/:cpf", controller.updateCliente)

/**
 * @swagger
 * /clientes/{cpf}:
 *   delete:
 *     summary: Remover cliente pelo CPF
 *     parameters:
 *       - in: path
 *         name: cpf
 *         schema:
 *           type: integer
 *         required: true
 *         description: Número do CPF do cliente
 *     responses:
 *      '200':
 *        description: Resposta de sucesso
 */

router.delete("/:cpf", controller.deleteCliente)

module.exports = router
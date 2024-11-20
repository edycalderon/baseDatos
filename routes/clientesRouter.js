import  express  from "express";
import ClientesService from "../services/clientes.service.js";
import { createClienteSchemas, updateClienteSchemas, getClienteSchemas } from "../schemas/clientes.schema.js";
import ValidatorHandler from "../middleware/validador.handler.js";
const router = express.Router();
const service = new ClientesService()

router.get('/', async(req, res, next ) => {
    try {
        const user = await service.all();
        res.status(200).json(user)
    } catch (e) {
        next(e)
    }
})


router.delete('/:id', ValidatorHandler(getClienteSchemas, 'params'), async(req, res, next) => {
    try {
        const {id} = req.params
        let deletecliente = await service.delete(id)
        if(deletecliente){
            res
            .status(200)
            .json({message: "Se a eliminado con exito" , data:deletecliente})
        }
    } catch (e) {
        next(e)
    }
})

router.post('/', ValidatorHandler(createClienteSchemas) , async(req, res, next) => {
    try {
        let newcliente = await service.create(req.body)
        res.status(200).json(newcliente);
    } catch (e) {
        next(e)
    }
})




router.put('/:id', 
ValidatorHandler(getClienteSchemas, 'params'),
ValidatorHandler(updateClienteSchemas, 'body') ,async(req, res, next) => {
    try {
        const {id} = req.params
        let clienteUpdate = await service.update(id, req.body)
        res.status(200).json(clienteUpdate)
    } catch (e) {
        next(e)
    }
})






router.get('/:id', ValidatorHandler(getClienteSchemas, 'params'), async (req, res, next) => {
    try {
        const {id} = req.params
        const userFound = await service.findone(id)
            res.status(200).json(userFound)
    } catch (e) {
        next(e)
    }
})

export default router
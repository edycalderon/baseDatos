import  express  from "express";
import { NotaService } from "../services/notas.service.js";
import { createNotaSchemas, updateNotaSchemas, getNotaSchemas } from "../schemas/notas.schema.js";
import ValidatorHandler from "../middleware/validador.handler.js";
const router = express.Router();

const notaService = new NotaService()

router.get('/', async(req, res, next ) => {
    try {
        const notas = await notaService.allNotas();
        res.status(200).json(notas)
    } catch (e) {
        next(e)
    }
})

router.get('/:id', ValidatorHandler(getNotaSchemas, 'params'),async (req, res, next) => {
    try {
        const {id} = req.params
        const nota = await notaService.findone(parseInt(id))
            res.status(200).json(nota)
    } catch (e) {
        next(e)
    }
})

router.post('/', ValidatorHandler(createNotaSchemas), async(req, res, next) => {
    try {
        let newNota = await notaService.store(req.body)
        res.status(200).json(newNota);
    } catch (e) {
        next(e)
    }
})

router.put('/:id',ValidatorHandler(getNotaSchemas, 'params'),
ValidatorHandler(updateNotaSchemas, 'body'), 
async(req, res, next) => {
    try {
        const {id} = req.params
        let notaUpdate = await notaService.update(parseInt(id), req.body)
        res.status(200).json(notaUpdate)
    } catch (e) {
        next(e)
    }
})



router.delete('/:id', ValidatorHandler(getNotaSchemas, 'params'), async(req, res, next) => {
    try {
        const {id} = req.params
        let deleteNota = await notaService.delete(parseInt(id))
        if(deleteNota){
            res
            .status(200)
            .json({message: "Se a eliminado con exito" , data:deleteNota})
        }
    } catch (e) {
        next(e)
    }
})














export default router
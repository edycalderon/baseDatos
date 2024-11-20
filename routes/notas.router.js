import  express  from "express";
import { NotaService } from "../services/notas.service.js";
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

router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        const nota = await notaService.findone(parseInt(id))
            res.status(200).json(nota)
    } catch (e) {
        next(e)
    }
})

router.post('/', async(req, res, next) => {
    try {
        let newNota = await notaService.store(req.body)
        res.status(200).json(newNota);
    } catch (e) {
        next(e)
    }
})


// router.delete('/:id', ValidatorHandler(getUsuarioSchemas, 'params'), async(req, res, next) => {
//     try {
//         const {id} = req.params
//         let deleteUser = await service.delete(id)
//         if(deleteUser){
//             res
//             .status(200)
//             .json({message: "Se a eliminado con exito" , data:deleteUser})
//         }
//     } catch (e) {
//         next(e)
//     }
// })






// router.put('/:id', 
// ValidatorHandler(getUsuarioSchemas, 'params'),
// ValidatorHandler(updateUsuarioSchemas, 'body') ,async(req, res, next) => {
//     try {
//         const {id} = req.params
//         let userUpdate = await service.update(id, req.body)
//         res.status(200).json(userUpdate)
//     } catch (e) {
//         next(e)
//     }
// })








export default router
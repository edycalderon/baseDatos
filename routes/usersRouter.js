import  express  from "express";
import UserService from "../services/users.service.js";
import {createUsuarioSchemas, updateUsuarioSchemas, getUsuarioSchemas } from "../schemas/users.schema.js";
import ValidatorHandler from "../middleware/validador.handler.js";
const router = express.Router();
const service = new UserService()

router.get('/', async(req, res, next ) => {
    try {
        const user = await service.all();
        res.status(200).json(user)
    } catch (e) {
        next(e)
    }
})


router.delete('/:id', ValidatorHandler(getUsuarioSchemas, 'params'), async(req, res, next) => {
    try {
        const {id} = req.params
        let deleteUser = await service.delete(id)
        if(deleteUser){
            res
            .status(200)
            .json({message: "Se a eliminado con exito" , data:deleteUser})
        }
    } catch (e) {
        next(e)
    }
})

router.post('/', ValidatorHandler(createUsuarioSchemas) , async(req, res, next) => {
    try {
        let newUser = await service.create(req.body)
        res.status(200).json(newUser);
    } catch (e) {
        next(e)
    }
})




router.put('/:id', 
ValidatorHandler(getUsuarioSchemas, 'params'),
ValidatorHandler(updateUsuarioSchemas, 'body') ,async(req, res, next) => {
    try {
        const {id} = req.params
        let userUpdate = await service.update(id, req.body)
        res.status(200).json(userUpdate)
    } catch (e) {
        next(e)
    }
})






router.get('/:id', ValidatorHandler(getUsuarioSchemas, 'params'), async (req, res, next) => {
    try {
        const {id} = req.params
        const userFound = await service.findone(id)
            res.status(200).json(userFound)
    } catch (e) {
        next(e)
    }
})

export default router
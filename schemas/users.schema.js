import Joi from "joi";
// import UserService from "../services/users.service.js";
// const userService = new UserService()

const id = Joi.string();
const nombre = Joi.string().min(3).max(15);
const apellido = Joi.string().min(3).max(15);
const contrasenia = Joi.string().min(8).max(16).pattern(/[a-zA-Z0-9]/);
const estatus = Joi.boolean().required()
const fechaCreacion = Joi.date();

const createUsuarioSchemas = Joi.object({
    nombre: nombre.required(),
    apellido: apellido.required(),
    contrasenia: contrasenia.required(),
})

const updateUsuarioSchemas = Joi.object({
    nombre: nombre.required(),
    apellido: apellido.required(),
    contrasenia: contrasenia.required(),
})

const getUsuarioSchemas = Joi.object({
    id: id.required()
})

export {createUsuarioSchemas, updateUsuarioSchemas, getUsuarioSchemas}
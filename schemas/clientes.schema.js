import Joi from "joi";


const id = Joi.string();
const nombre = Joi.string().min(3).max(15);
const apellido = Joi.string().min(3).max(15);
const address = Joi.string();
const type = Joi.string();
const estatus = Joi.boolean().required();
const create_at = Joi.date();

const createClienteSchemas = Joi.object({
    nombre: nombre.required(),
    apellido: apellido.required(),
    address: address.required(),
})

const updateClienteSchemas = Joi.object({
    nombre: nombre.required(),
    apellido: apellido.required(),
    address: address.required(),
})

const getClienteSchemas = Joi.object({
    id: id.required()
})

export {createClienteSchemas, updateClienteSchemas, getClienteSchemas}
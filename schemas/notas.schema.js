import Joi from "joi";


const id = Joi.number();
const nota = Joi.number();
const user_ID = Joi.number();

const createNotaSchemas = Joi.object({
    nota: nota.required(),
})

const updateNotaSchemas = Joi.object({
    nota: nota.required(),
    user_ID: user_ID.required()
})

const getNotaSchemas = Joi.object({
    id: id.required()
})

export {createNotaSchemas, updateNotaSchemas, getNotaSchemas}
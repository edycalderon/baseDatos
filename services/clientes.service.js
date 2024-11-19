import { notFound } from '@hapi/boom';
import  db from '../models/index.js'
const { Cliente } = db

class ClientesService {
    async all() {
        const cliente = await Cliente.findAll();
        return cliente
    }

    async findone(id){
        const cliente = await Cliente.findByPk(id);
        if(!cliente){
            throw notFound('cliente not Found')
        }
        return(cliente) 
    }


    async create(data) {
        try {
            const cliente =  await Cliente.create({
                ...data,
                estatus: true
            })
            return cliente
        } catch (error) {
            throw new Error('error')
        }


    }

    async update(id , {nombre, apellido, address }) {
        try {
            const cliente = await Cliente.findByPk(id)
            cliente.nombre = nombre,
            cliente.apellido = apellido,
            cliente.address = address
            cliente.save()
            return cliente
        } catch (error) {
            throw new notFound('cliente no encontrado')
        }
    }

    async delete(id) {
        const cliente = await  Cliente.findByPk(id)
        cliente.destroy()
        return cliente
    }
}

export default  ClientesService
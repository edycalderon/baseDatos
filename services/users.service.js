import { notFound } from '@hapi/boom';
import  db from '../models/index.js'
const { User } = db

class UserService {

    async all() {
        const users = await User.findAll();
        return users
    }

    async findone(id){
        const user = await User.findByPk(id);
        if(!user){
            throw notFound('User not Found')
        }
        return(user) 
    }


    async create(data) {
        try {
            const user =  await User.create({
                ...data,
                estatus: true
            })
            return user
        } catch (error) {
            throw new Error('error')
        }


    }

    async update(id , {nombre, apellido, contrasenia }) {
        try {
            const user = await User.findByPk(id)
            user.nombre = nombre,
            user.apellido = apellido,
            user.contrasenia = contrasenia ? contrasenia : user.contrasenia
            user.save()
            return user
        } catch (error) {
            throw new notFound('usuario no encontrado')
        }
    }

    async delete(id) {
        const user = await  User.findByPk(id)
        user.destroy()
        return user
    }
}

export default  UserService
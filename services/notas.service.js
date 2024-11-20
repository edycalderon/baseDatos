import { notFound } from '@hapi/boom';
import db from '../models/index.js'
const { Notas, User } = db
export class NotaService{
    async allNotas(){
        return await  Notas.findAll({
            attributes: {exclude: ['UserId']},
            include: {
                model: User, attributes: {
                    exclude:['contrasenia', 'estatus', 'createdAt', 'updatedAt']
                }}
        });
    }

    async findone(id){
        const nota = await Notas.findByPk(id, { 
            attributes: {exclude: ['UserId']},
            include:[
                {
                    model: User
                }
            ]
        });
        return nota
    }

    async store(data){
        const user = await User.findByPk(data.user_ID)
        if(!user){
            throw notFound('usuario no existe')
        }
        const nota = await Notas.create({
            nota: data.nota,
            UserId: user.id
        })
        
        return nota
    }
}
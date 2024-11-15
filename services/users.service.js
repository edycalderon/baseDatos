import { faker, } from '@faker-js/faker';
import { notFound } from '@hapi/boom';
import connection from '../dataBase/conection.js';

class UserService {
    constructor(){
    this.user = [],
    this.generate()
    }

    generate() {
        const limit = 100
        
        for (let i = 0; i < limit; i++) {
            this.user.push(
                {
                    nombre: `${faker.person.firstName()} ${i + 1}`,
                    apellido: `${faker.person.lastName()} ${i + 1}`,
                    id: faker.string.uuid(),
                    contrasenia: `${faker.internet.password(12)}`,
                    estatus: true,
                    fechaCreacion: "2024-11-07"
                    }
            )
            
        }
    }

    async all() {
        // return new Promise((resolve, reject)=>{
        //     setTimeout(() => {
        //         resolve(this.user)
        //     }, 3000);
        // })

            const [results, fields] = await connection.query(
              'SELECT * FROM new_table' 
            );
            return results

    }

    async findone(id){
        const [results] = await connection.query(
            'select * from  new_table where id = ?' 
        [id]
        );

        if(results.length = 0){
            throw new Error('usuario no encontrado')
        }
        return results; 
    }


    async create(data) {
        let date = new Date()
        const [results] = await connection.query(
            'insert into new_table (name, apellido, contrasenia, status, fechaCracion) values(?,?,?,?,?)' 
            [data.name, data.lastname, data.contrasenia, true]
        );
        return results
        // let date = new Date();
        // const newUser = {
        //     id: this.user.length + 1,
        //     ... data,
        //     estatus: true,
        //     fechaCreacion: date.toISOString().slice(0, 10)
        // }
        // this.user.push(newUser);
        // return newUser;

    }

    update(id , {nombre, apellido, contrasenia }) {
        const userFound = this.user.find(item => item.id == id) 
        if(!userFound){
            throw notFound('el usuario  no existe')
        }

        userFound.nombre = nombre;
        userFound.apellido = apellido;
        userFound.contrasenia = contrasenia ? contrasenia : userFound.contrasenia;

        return userFound;
    }

    async delete(id) {
        const [results] = await connection.query(
            'delete from  new_table where id = ?' 
        [id]
        );

        if(results.fieldCount == 0){
            throw notFound('el usuario  no existe')
        }
    }
}

export default  UserService
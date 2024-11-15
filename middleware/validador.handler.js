import { badRequest } from "@hapi/boom";


function ValidatorHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data);
        if(error){
            next(badRequest(error))
        }else{
            next()
        }
    }
}

export default ValidatorHandler
import usuariosRouter from './usersRouter.js'
import clientesRouter from './clientesRouter.js'
const RouterApi = (app) => {
    app.use('/usuarios', usuariosRouter)
    app.use('/clientes', clientesRouter)
}
export default RouterApi
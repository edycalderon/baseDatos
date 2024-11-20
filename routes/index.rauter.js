import usuariosRouter from './usersRouter.js'
import clientesRouter from './clientesRouter.js'
import NotasRouter from './notas.router.js'
const RouterApi = (app) => {
    app.use('/usuarios', usuariosRouter)
    app.use('/clientes', clientesRouter)
    app.use('/notas', NotasRouter)
}
export default RouterApi
import usuariosRouter from './usersRouter.js'
const RouterApi = (app) => {
    app.use('/usuarios', usuariosRouter)
}
export default RouterApi
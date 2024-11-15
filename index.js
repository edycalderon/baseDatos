import express from 'express'
import RouterApi from './routes/index.rauter.js';
import cors from 'cors'
import { logError, errorHandler, booErrorHandlers } from './middleware/error.handler.js';
const app = express();
const port = 3000;
app.use(express.json())
app.use(cors())



app.get('/', (req, res) => {
    res.send('hola mi server en mi express')
})

RouterApi(app)

app.use(logError)
app.use(booErrorHandlers)
app.use(errorHandler)



app.listen(port, () => {
    console.log(`aplicacion iniciada correctamente en el puerto` +  port)
})



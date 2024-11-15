

function logError(err, req, res, next) {
    console.log('logErrors')
    console.error(err)
    next(err)
}

function errorHandler(err, req, res, next) {
    console.log('errorHandler')
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

function booErrorHandlers(err, req, res, next) {
    if(err.isBoom){
        const { output } = err
        res.status(output.statusCode).json(output.payload)
    }
    next(err)
}

export {logError, errorHandler, booErrorHandlers}
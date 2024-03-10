const errorHandler = (err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const respuestaError = { error: {
        message: err.message || "Error interno del servidor",
        code: err.code || "Internal_error",
    }
};
res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;
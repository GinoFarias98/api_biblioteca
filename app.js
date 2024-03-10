const express = require('express');
const app = express();

app.use(express.json());

const librosRouter = require('./routes/libros');
const errorHandler = require('./middleware/errorHandler');

app.use('/libros', librosRouter);
app.use(errorHandler);

app.listen(3000, ()=>{
    console.log("iniciando server enel puerto 3000");
});

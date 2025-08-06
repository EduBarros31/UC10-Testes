const express = require('express')
const  { sequelize }  = require('./src/config/configDB');
require('dotenv').config();
const livroRoutes = require('./src/modules/livro/routes/livroRoute')

const app = express();
const PORT = process.env.PORT
app.use(express.json());

app.use('/livros', livroRoutes)

// await sequelize.sync({ force: true })


app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`);
}
);

module.exports = app;


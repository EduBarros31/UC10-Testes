const express = require('express');
const { sequelize } = require('./src/config/configDB');
require('dotenv').config();
const produtoRoutes = require('./src/moduls')

const app = express();
const PORT = process.env.PORT
app.use(express.json());

// await sequelize.sync({ force: true })


app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`);
}
);

module.exports = app;



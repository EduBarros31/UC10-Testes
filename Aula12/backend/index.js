const express = require('express')
const  { sequelize }  = require('./src/config/configDB');
require('dotenv').config();
const livroRoutes = require('./src/modules/livro/routes/livroRoute')

const app = express();
const PORT = process.env.PORT
app.use(express.json());

app.use('/livros', livroRoutes)

// await sequelize.sync({ force: true })

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync({ force: true, alter: true });
        console.log('Banco de dados sincronizado com sucesso.');
    } catch (err) {
        console.error('Erro ao conectar ou sincronizar o banco de dados:', err);
    }
    console.log(`Servidor rodando na porta ${PORT}`);
});



module.exports = app;

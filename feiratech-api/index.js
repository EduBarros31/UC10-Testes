const express = require('express');
const { sequelize } = require('./src/config/configDB');
require('dotenv').config();
const expositorRoutes = require('./src/modules/expositor/routes/expositorRoute')


const app = express();
const PORT = process.env.PORT
app.use(express.json());

app.use('/expositor', expositorRoutes);

// await sequelize.sync({ force: true })


app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`);
}
);

module.exports = app;

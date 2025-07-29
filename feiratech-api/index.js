const express = require('express');
const  { Sequelize }  = require('../feiratech-api/src/config/configDB')
require('dotenv').config();
const expositorRoutes = require('./src/modules/expositor/routes/expositorRoute')
const prototipoRoutes = require('./src/modules/prototipo/routes/prototipoRoute');


const app = express();
const PORT = process.env.PORT
app.use(express.json());

app.use('/expositor', expositorRoutes);
app.use('/prototipo', prototipoRoutes);




app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`);
}
);

module.exports = app;

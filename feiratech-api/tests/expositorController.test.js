const expositorModel = require('../src/modules/expositor/models/expositorModel');
const { sequelize } = require('../src/config/configDB');
const app = require('../index');
const request = require('supertest');

beforeAll(async () => {
    await sequelize.sync({ force: true });
})

afterAll(async () => {
    await sequelize.close();
})

afterEach(async () => {
    // Truncate the table
    await expositorModel.truncate();
})

describe('Testes de cadastrar Expositor', () => { 
   test('POST /expositores', async () => {  
     const res = (await request(app).post('/expositor')).set({nome: 'Festa do Morango', });
     expect(res.status).tobe(201);
     expect(res.status).tobe(400)
     expect(res.body.expositor).toHaveProperty('')
   })

   

     
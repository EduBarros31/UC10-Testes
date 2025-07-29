const expositorModel = require('../src/modules/expositor/models/expositorModel');
const sequelize = require('../src/config/configDB');
const app = require('../index');
const request = require('supertest');

beforeAll(async () => {
    await sequelize.authenticate();
})

afterAll(async () => {
    await sequelize.close();
})

afterEach(async () => {
    // Truncate the table
    await expositorModel.truncate();
})

describe('Testes de  Expositor - POST', () => { 
   test('Criar expositor com sucesso', async () => {  
     const res = await request(app).post('/expositor').send({
        nome:'Feira Tech',  
        email: 'feira123@gmail.com',
        instituicao: 'SEnac'
     })
        expect(res.status).toBe(201);
        expect(res.body.msg).toBe('Expositor criado com sucesso');
    })
    test('Verificar email duplicado', async () => { 
      const res = await request(app).post('/expositor').send({
        nome:'Feira Tech',  
        email: 'feira123@gmail.com',
        instituicao: 'SEnac'
        })
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('email já cadastrado');
    });
    test('Campos obrigatórios ausentes', async () => {
       const res = await request(app).post('/expositor').send({
        nome: 'Feira Tech',
        email: '',
        instituicao: 'SEnac'
       })
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Campos obrigtorios nao informados!')
    });
    test('Listar Expositores', async () => {
        const res = await request(app).get('/expositor')
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
        });
    test('Buscar Expositor por ID', async () => {   
        const res = (await request(app).get('/expositor/1'))
             expect(res.status).toBe(200);
             expect(res.body.message).toBe('Expositor encontrado');

    });
    test('Buscar Expositor por ID inexistente', async () => {
        const res = await request(app).get('/expositor/8');
        expect(res.status).toBe(404);
        expect(res.body.message).toBe('Expositor não encontrado');
    });
    test('Deletar Expositor existente', async () => {
        const res = await request(app).delete('/expositor/1');
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Expositor removido com sucesso');
    });
    test('atualizar Expositor existente', async () => {
        const res = await request(app).put('/expositor/1').send({
            nome: 'Feira Tech Atualizada',
            email: 'feira123@gmail.com',
            instituicao: 'SEnac Atualizada'
        });
        expect(res.status).toBe(201);
        expect(res.body.message).toBe('Expositor atualizado com sucesso');
    });


});

     
     
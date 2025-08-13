const Produto = require('../modules/produto/models/produtoModel');
const { sequelize } = require('../config/configDB');
const app = require('./index');
const request = require('supertest')


beforeAll(async () => {
    await sequelize.sync({ force: true })   // Preparacao para craicao do Banco de Dados
                                            // Fazendo a sicronizacao com o mesmo.
})
afterAll(async () => {
    await sequelize.close();
})

afterEach(async ()=>{
   // Truncate the table
    await Produto.truncate();
})

describe('Tests de integracao - Produto', ()=>{
    test('POST/produtos', async() =>{
        const res = await request(app).post('./produtos').send({nome:'feijao', preco: 3.70, estoque: 30})
        expect(res.status).toBe(201);
        expect(res.body.produto).toHaveProperty('cod_prod');
        expect(res.body.produto.nome).toBe('Feijão');
        
    })
})

test('POST /produtos - Deve falhar ao criar um produto sem nome ', async()=>{
    const res = await request(app).post('/produtos').send({preco: 3.70, estoque: 30});
    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
})
test('POST /produtos - Deve falhar ao criar um produto sem preço ', async()=>{
    const res = await request(app).post('/produtos').send({nome: 'Feijão', estoque: 30});
    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
})
test('POST /produtos - Deve falhar ao criar um produto sem estoque ', async()=>{
    const res = await request(app).post('/produtos').send({nome: 'Feijão'});
    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
})
test('POST /produtos - Deve falhar ao criar um produto sem dados ', async()=>{
    const res = await request(app).post('/produtos').send({});
    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
})

//TDD para listar Produtos
describe('Testes de integracao - Produto Listar', ()=>{





    
})

const request = require('supertest');
const usuarioModel = require('../src/models/usuarioModel')

//Primeiro devemos preparar o mock 



jest.mock('../src/models/usuarioModel')


describe('Testes para o rota de POST /usuarios', ()=>{
    test('Deve cadastrar corretamente um usuario', async()=>{
        const userMoco = {id:1, nome: 'Edu', senha:9090};
        usuarioModel.salvarUsuario.mockResolvedValue(userMoco); //Tipo de retorno --> sempre ser a const userMoco
        const res = await request(app).post('/usuarios').send({nome: 'Edu', senha:9090});
        expect(res.status).toBe(201);
        expect(res.body).toEqual(userMoco);
        expect(usuarioModel.salvarUsuario).toHaveBeenCalledWith({nome: 'Edu'}); //
    })
});
describe('Testes para a rota de GET /usuarios', () => {
    test('Deve listar corretamente os usuarios', async () => {
        const usersMock = [{ id: 1, nome: 'Edu', senha: 9090 }, { id: 2, nome: 'Eduardo', senha: 8080 }];
        usuarioModel.listarUsuarios.mockResolvedValue(usersMock);
        const res = await request(app).get('/usuarios');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.usuarios)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(1);
        expect(usuarioModel.listarUsuarios).toHaveBeenCalledWith();
    })

})

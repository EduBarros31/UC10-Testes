const livroModel = require('../models/livroModel');



class LivroController {
    static async criarLivro(req, res){
        try {
            const { titulo, autor, ano_publicacao, genero, preco} = req.body;
            const livro = await livroModel.create({ titulo, autor, ano_publicacao, genero, preco});
            res.status(201).json({ msg: 'Livro criado com sucesso', livro}) 
            console.log( livro )
        } catch (error){
            res.status(500).json({ msg: 'Erro ao criar livro', error: error.message });
        }

    }

    static async listarLivros(req, res) {
        try {
            const livros = await livroModel.findAll();
            return res.status(200).json(livros)
            
        } catch (error) {
            return resstatus(500).json ({ message: 'Erro ao listar livros', error: error.message})
            
        }

    }

    static async buscarPorTitulo() {

    }

    static async atualizarLivros() {

    }

    static async deletarLivro() {

    }
}

module.exports = LivroController
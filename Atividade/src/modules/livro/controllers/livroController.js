const livroModel = require('../models/livroModel');



class LivroController {
    static async criarLivro(req, res){
        const generosLivros = [
            "Romance",
            "Ficção Científica",
            "Fantasia",
            "Mistério",
            "Suspense",
            "Terror",
            "Aventura",
            "Drama",
            "Histórico",
            "Biografia",
            "Autobiografia",
            "Poesia",
            "Humor",
            "Literatura Clássica",
            "Literatura Contemporânea",
            "Infantojuvenil",
            "Young Adult (YA)",
            "Distopia",
            "Realismo Mágico",
            "Crônicas",
            "Ensaios",
            "Autoajuda",
            "Espiritualidade",
            "Religião",
            "Filosofia",
            "Psicologia",
            "Ciências Sociais",
            "Política",
            "Economia",
            "Educação",
            "Tecnologia",
            "Negócios",
            "Direito",
            "Medicina",
            "Ecologia",
            "Viagens",
            "Gastronomia",
            "Arte",
            "Fotografia"
          ];
          const sqlInjectionPattern = /('|--|;|\/\*|\*\/|DROP|SELECT|INSERT|UPDATE|DELETE|UNION|--|#|OR|AND|=|LIKE|%|--|\bFROM\b|\bWHERE\b|\bHAVING\b)/i;
        
          try {
            const { titulo, autor, ano_publicacao, genero, preco } = req.body;
            if (!titulo || !autor || !ano_publicacao || !genero || !preco) {
                return res.status(400).json({ msg: 'Todos os campos são obrigatórios' });
            }
            const ano = Number(ano_publicacao);
            const precoNum = Number(preco);
        
            if (!Number.isInteger(ano) || ano < 1000 || ano > new Date().getFullYear()) {
                return res.status(400).json({ msg: "Ano de publicação deve ser um número" });
            }
            if (isNaN(precoNum)) {
                return res.status(400).json({ msg: "Preço deve ser um número" });
            }
            if (precoNum <= 0) {
                return res.status(400).json({ msg: "Preço deve ser maior que zero" });
            }
            if (titulo.length < 2) {
                return res.status(400).json({ msg: "Título deve ter pelo menos 2 caracteres" });
            }
            if (!generosLivros.includes(genero)) {
                return res.status(400).json({ msg: "Gênero inválido" });
            }
            if (sqlInjectionPattern.test(titulo)) {
                return res.status(400).json({ msg: "Título inválido" });
            }
            if (sqlInjectionPattern.test(autor)) {
                return res.status(400).json({ msg: "Autor inválido" });
            }
            if (sqlInjectionPattern.test(ano_publicacao)) {
                return res.status(400).json({ msg: "Ano de publicação deve ser um número" });
            }
            if (sqlInjectionPattern.test(preco)) {
                return res.status(400).json({ msg: "Preço deve ser um número" });
            }
            const livro = await livroModel.create({ titulo, autor, ano_publicacao: ano, genero, preco: precoNum });
            res.status(201).json({ msg: 'Livro criado com sucesso', livro });
            console.log(livro);
        } catch (error) {
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
        try {
            const { titulo } = req.params;
            const livro = await livroModel.findOne({ where: { titulo } });
            if (!livro) {
                return res.status(404).json({ msg: 'Livro não encontrado' });
            }
            return res.status(200).json(livro);
        } catch (error) {
            return res.status(500).json({ msg: 'Erro ao buscar livro', error: error.message });
        }

    }

    static async atualizarLivros() {

    }

    static async deletarLivro() {

    }
}

module.exports = LivroController
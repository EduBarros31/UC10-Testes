const livroModel = require('../models/livroModel');

const generosLivros = [
  "Romance", "Ficção Científica", "Fantasia", "Mistério", "Suspense",
  "Terror", "Aventura", "Drama", "Histórico", "Biografia", "Autobiografia",
  "Poesia", "Humor", "Literatura Clássica", "Literatura Contemporânea",
  "Infantojuvenil", "Young Adult (YA)", "Distopia", "Realismo Mágico",
  "Crônicas", "Ensaios", "Autoajuda", "Espiritualidade", "Religião",
  "Filosofia", "Psicologia", "Ciências Sociais", "Política", "Economia",
  "Educação", "Tecnologia", "Negócios", "Direito", "Medicina", "Ecologia",
  "Viagens", "Gastronomia", "Arte", "Fotografia"
];

const sqlInjectionPattern = /(\b(SELECT|INSERT|DELETE|UPDATE|DROP|UNION|--|;|\/\*|\*\/)\b|['"#=])/i;

class LivroController {
  static async criarLivro(req, res) {
    try {
      const { titulo, autor, ano_publicacao, genero, preco } = req.body;

      // Campos obrigatórios
      if (!titulo || !autor || !ano_publicacao || !genero || preco === undefined) {
        return res.status(400).json({ msg: 'Todos os campos são obrigatórios' });
      }

    
      if (typeof titulo === 'string' && sqlInjectionPattern.test(titulo)) {
        return res.status(400).json({ msg: 'Título inválido' });
      }
      if (typeof autor === 'string' && sqlInjectionPattern.test(autor)) {
        return res.status(400).json({ msg: 'Autor inválido' });
      }
      if (typeof genero === 'string' && sqlInjectionPattern.test(genero)) {
        return res.status(400).json({ msg: 'Gênero inválido' });
      }
      if (sqlInjectionPattern.test(String(ano_publicacao))) {
        return res.status(400).json({ msg: 'Ano de publicação deve ser um número' });
      }
      if (sqlInjectionPattern.test(String(preco))) {
        return res.status(400).json({ msg: 'Preço deve ser um número' });
      }

    
      const ano = Number(ano_publicacao);
      if (!Number.isInteger(ano) || ano < 1000 || ano > new Date().getFullYear()) {
        return res.status(400).json({ msg: 'Ano de publicação deve ser um número' });
      }

      const precoNum = Number(preco);
      if (isNaN(precoNum)) {
        return res.status(400).json({ msg: 'Preço deve ser um número' });
      }
      if (precoNum <= 0) {
        return res.status(400).json({ msg: 'Preço deve ser maior que zero' });
      }

      if (typeof titulo !== 'string' || titulo.trim().length < 2) {
        return res.status(400).json({ msg: 'Título deve ter pelo menos 2 caracteres' });
      }

      if (typeof autor !== 'string' || autor.trim().length < 2) {
        return res.status(400).json({ msg: 'Autor deve ter pelo menos 2 caracteres' });
      }

      if (!generosLivros.includes(genero)) {
        return res.status(400).json({ msg: 'Gênero inválido' });
      }

      // Criação
      const novoLivro = await livroModel.create({
        titulo: titulo.trim(),
        autor: autor.trim(),
        ano_publicacao: ano,
        genero,
        preco: precoNum
      });

      return res.status(201).json({
        msg: 'Livro criado com sucesso',
        livro: novoLivro
      });

    } catch (error) {
      console.error('Erro criarLivro:', error);
      return res.status(500).json({ msg: 'Erro ao criar livro' });
    }
  }

  static async listarLivros(req, res) {
    try {
      const livros = await livroModel.findAll();
      return res.status(200).json(livros);
    } catch (error) {
      console.error('Erro listarLivros:', error);
      return res.status(500).json({ msg: 'Erro ao listar livros' });
    }
  }

  static async buscarPorTitulo(req, res) {
    try {
      const { titulo } = req.query;
      if (!titulo) {
        return res.status(400).json({ msg: 'Título é obrigatório' });
      }

      const livros = await livroModel.findAll({
        where: {
          titulo: { 
            [require('sequelize').Op.iLike]: `%${titulo}%` }
        }
      });

      if (livros.length === 0) {
        return res.status(404).json({ msg: 'Livro não encontrado' });
      }

      return res.status(200).json({ msg: 'Livro encontrado', livros });
    } catch (error) {
      console.error('Erro buscarPorTitulo:', error);
      return res.status(500).json({ msg: 'Erro ao buscar livro' });
    }
  }

  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const livro = await livroModel.findByPk(id);
      if (!livro) {
        return res.status(404).json({ msg: 'Livro não encontrado' });
      }
      return res.status(200).json({ msg: 'Livro encontrado', livro });
    } catch (error) {
      console.error('Erro buscarPorId:', error);
      return res.status(500).json({ msg: 'Erro ao buscar livro', error });
    }
  }

  static async atualizarLivros(req, res) {
    try {
      const { id } = req.params;
      const { titulo, autor, ano_publicacao, genero, preco } = req.body;

      if (
        !titulo || typeof titulo !== 'string' || titulo.trim().length < 2 ||
        !autor || typeof autor !== 'string' || autor.trim().length < 2 ||
        !Number.isInteger(ano_publicacao) || ano_publicacao < 1000 || ano_publicacao > new Date().getFullYear() ||
        !genero || !generosLivros.includes(genero) ||
        typeof preco !== 'number' || preco <= 0
      ) {
        return res.status(400).json({ msg: 'Dados inválidos para atualização' });
      }

      let livro = await livroModel.findByPk(id);
      if (!livro) {
        return res.status(404).json({ msg: 'Livro não encontrado' });
      }

      await livro.update({ titulo: titulo.trim(), autor: autor.trim(), ano_publicacao, genero, preco });
      return res.status(200).json({ msg: 'Livro atualizado com sucesso', livro });

    } catch (error) {
      console.error('Erro atualizarLivros:', error);
      return res.status(500).json({ msg: 'Erro interno', error });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const { id } = req.params;
      const livro = await livroModel.findByPk(id);

      if (!livro) {
        return res.status(404).json({ msg: 'Livro não encontrado' });
      }

      await livro.destroy();
      return res.status(200).json({ msg: 'Livro deletado com sucesso' });
    } catch (error) {
      console.error('Erro deletarLivro:', error);
      return res.status(500).json({ msg: 'Erro ao deletar livro', erro: error.message });
    }
  }
}

module.exports = LivroController;

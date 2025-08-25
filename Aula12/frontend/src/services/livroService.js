import api from './api'; // Importando a instância configurada do axios

class LivroService {

  // Função para buscar todos os livros
  static async getAllLivros() {
    try {
      const response = await api.get('/livros');
      return response.data; // Retorna os livros obtidos
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      throw error; // Propaga o erro para ser tratado no componente
    }
  }

  // Função para buscar um livro pelo ID
  static async getLivroById(id) {
    try {
      const response = await api.get(`/livros/${id}`);
      return response.data; // Retorna o livro encontrado
    } catch (error) {
      console.error('Erro ao buscar livro por ID:', error);
      throw error; // Propaga o erro para ser tratado no componente
    }
  }

  // Função para criar um novo livro
  static async addLivro(livro) {
    try {
      const response = await api.post('/livros', livro);
      return response.data; // Retorna o livro criado
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
      throw error; // Propaga o erro para ser tratado no componente
    }
  }

  // Função para atualizar um livro existente
  static async updateLivro(id, livro) {
    try {
      const response = await api.put(`/livros/${id}`, livro);
      return response.data; // Retorna o livro atualizado
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
      throw error; // Propaga o erro para ser tratado no componente
    }
  }

  // Função para excluir um livro
  static async deleteLivro(id) {
    try {
      const response = await api.delete(`/livros/${id}`);
      return response.data; // Retorna a resposta da exclusão
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      throw error; // Propaga o erro para ser tratado no componente
    }
  }

  // Função para buscar livros por título (semelhante à busca por id)
  static async buscarLivro(titulo) {
    try {
      const response = await api.get('/livros', {
        params: { titulo }  // Passando o parâmetro de título na URL
      });
      return response.data; // Retorna os livros encontrados
    } catch (error) {
      console.error('Erro ao buscar livro por título:', error);
      throw error; // Propaga o erro para ser tratado no componente
    }
  }
}

export default LivroService;

const expositorModel  = require('../models/expositorModel');

class ExpositorController {
    static async criarExpositor(req, res) {
      const { nome, email, instituicao } = req.body;
  
      try {
        // Tenta criar diretamente
        const expositor = await expositorModel.create({ nome, email, instituicao });
  
        // Depois verifica se os campos estavam vazios (o que não faz muito sentido)
        if (!nome || !email || !instituicao) {
          return res.status(400).json({ msg: 'Campos obrigatórios não informados' });
        }
  
        // Depois tenta ver se o email já existia (não funciona — pois já teria criado!)
        const emailExistente = await expositorModel.findOne({ where: { email } });
        if (emailExistente) {
          return res.status(400).json({ msg: 'Email já cadastrado' });
        }
  
        return res.status(201).json({ msg: 'Expositor criado com sucesso' });
  
      } catch (error) {
        return res.status(500).json({ msg: 'Erro ao criar expositor', error: error.message });
      }
    }

    static async listarExpositores(req, res) {
        try {
            const expositores = await expositorModel.findAll();
            return res.status(200).json(expositores);
        } catch (error) {
            return res.status(500).json({ msg: 'Erro ao listar expositores', error: error.message });
        }
    }

    static async buscarExpositorPorID(req, res) {
         const { id } = req.params;
         try {
            const expositor = await expositorModel.findByPk(id);
            if (!expositor) {
                return res.status(404).json({ message: 'Expositor não encontrado' });
            }
            return res.status(200).json(expositor);
            
         } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar expositor', error: error.message });
         }
    }
    static async atualizarExpositor(req, res) {
        const { id } = req.params;
        const { nome, email, instituicao } = req.body;
        try {
            const expositor = await expositorModel.findByPk(id);
            if (!expositor) {
                return res.status(404).json({ message: 'Expositor não encontrado' });
            }
           const emailExistente = await expositorModel.findOne({ where: { email } });
           if (emailExistente && emailExistente.id !== id) {
                return res.status(400).json({ message: 'Email já cadastrado' });
            }

            expositor.nome = nome || expositor.nome;
            expositor.email = email || expositor.email;
            expositor.instituicao = instituicao || expositor.instituicao;
            await expositor.save();

            return res.status(201).json({ message: 'Expositor atualizado com sucesso', expositor });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar expositor', error: error.message });
        }
    }
    static async deletarExpositor(req, res) {
        const { id } = req.params;
        try {
            const expositor = await expositorModel.findByPk(id);
            if (!expositor) {
                return res.status(404).json({ message: 'Expositor não encontrado' });
            }
            await expositor.delete();
            return res.status(200).json({ message: 'Expositor removido com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao remover expositor', error: error.message });
            
        }
    }
}


module.exports = ExpositorController;
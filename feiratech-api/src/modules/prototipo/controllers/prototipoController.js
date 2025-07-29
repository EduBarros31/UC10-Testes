const PrototipoModel = require('../models/prototipoModel')






class PrototipoController { 
    static async criarPrototipo(req, res) {
        try {
            const { titulo, descricao, categoria, expositor } = req.body;

            if ( !titulo || !descricao || !categoria || !expositor) {
                return res.status(400).json({ msg: 'Todos os campos devem ser preenchidos!' });
            }

            const prototipo = await PrototipoModel.create({ titulo, descricao, categoria, expositor});
            if (!prototipo) {
                return res.status(500).json({ msg: 'Erro ao criar protótipo' });
            }
            return res.status(201).json({ msg: 'Protótipo criado com sucesso!', prototipo });

        } catch (error) {
            return res.status(500).json({ msg: 'Erro interno', error: error.message });
        }
    }
    static async listarPrototipos(req, res) {
        try {
            const prototipos = await PrototipoModel.findAll();
            return res.status(200).json(prototipos);
        } catch (error) {
            return res.status(500).json({ msg: 'Erro ao listar protótipos', error: error.message });
        }
    }
    static async buscarPrototipoPorID(req, res) {
        const { id } = req.params;
        try {
            const prototipo = await PrototipoModel.findByPk(id);
            if (!prototipo) {
                return res.status(404).json({ message: 'Protótipo não encontrado' });
            }
            return res.status(200).json(prototipo);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar protótipo', error: error.message });
        }
    }
    static async atualizarPrototipo(req, res) {
        const { id } = req.params;
        const { titulo, descricao, categoria, expositor } = req.body;
        try {
            const prototipo = await PrototipoModel.findByPk(id);
            if (!prototipo) {
                return res.status(404).json({ message: 'Protótipo não encontrado' });
            }
            prototipo.titulo = titulo || prototipo.titulo;
            prototipo.descricao = descricao || prototipo.descricao;
            prototipo.categoria = categoria || prototipo.categoria;
            prototipo.expositor = expositor || prototipo.expositor;
            await prototipo.save();

            return res.status(200).json({ message: 'Protótipo atualizado com sucesso', prototipo });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar protótipo', error: error.message });
        }
    }
    static async deletarPrototipo(req, res) {
        const { id } = req.params;
        try {
            const prototipo = await PrototipoModel.findByPk(id);
            if (!prototipo) {
                return res.status(404).json({ message: 'Protótipo não encontrado' });
            }
            await prototipo.destroy();
            return res.status(200).json({ message: 'Protótipo removido com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao remover protótipo', error: error.message });
        }
    }

}

module.exports = PrototipoController;




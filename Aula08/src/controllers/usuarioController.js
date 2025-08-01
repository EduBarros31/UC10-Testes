const usuarioModel = require('../models/usuarioModel')


class usuarioController{

    static async cadastrar(req, res){
     try{
         const{nome, senha} = req.body;
         if(!nome || !senha){
             res.status(400).json({msg:"Todos os campos devem se preenchidos"})
             return res.status(400).json({msg: 'Nome e senha são obrigatórios'});
         }
         const usuario = await usuarioModel.salvarUsuario({nome, senha})
         res.status(201).json({msg: "Usuário cadastrado com sucesso"}, usuario);

         
 
     }catch(error){ 
        res.status(500).json({msg: "Erro ao cadastrar", error: error.message})

     }
    }
    static async listarUsuarios(req,res){
        try{
            const usuarios = await usuarioModel.listarUsuarios();
            res.status(200).json(usuarios);
        }catch(error){
            res.status(500).json({msg: "Erro ao listar", error: error.message})
        }    
    }
    
  
 
 }

 module.exports = usuarioController;
class usuarioModel{

    static async salvarUsuario(usuario){
        console.log('Salvando user no banco de dados...');
        return {id: 1, ...usuario}; 
    }
    static async listarUsuarios(){
        return [
            {id: 1, nome: "Edu", senha:9090},
            {id:2, nome: "Joel", senha:8080}
        ];
    }
    static async deletar(usuario){
        
    }
}

module.exports = usuarioModel;
const usuarios = require('../models/usuarios');
const repositorios = require('./requisicao')
const post =async (req,res)=>{
    try { 
        return res.status(201).json ({"payload":{ "github_username":"<github_username>"},"message": "request created"});   
    } catch (error) {
        return res.status(500).json({
            message: error
        })
        
    }
};

const get =async (req,res)=>{
    try {
        const username = req.params['username'];
        const repositoriouser =await repositorios.repositoriesbyuser(username);
        usuarios.publishRepo(repositoriouser, username);
        return res.status(200).send(repositoriouser);
    } catch (error) {
        return res.status(500).json({
            message: error
        })
        
    }
}

module.exports = {
    post,
    get
}
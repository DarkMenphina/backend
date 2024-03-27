const axios = require ('axios')

const repositoriesbyuser =async (username)=>{
    const retorno = await axios.get(`https://api.github.com/users/${username}/repos`);
    return retorno.data
}

module.exports = {
    repositoriesbyuser
}
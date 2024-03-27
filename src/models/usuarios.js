const fs = require('fs');

// Convertendo os dados para JSON

const publishRepo = (repositorios, username) => {
    console.log(repositorios)

    const jsonData = {
        "username": username,
        "repositorios": repositorios
    };
    const json = JSON.stringify(jsonData);
    const buffer = Buffer.from(json, "utf-8");
    // Escrevendo os dados no arquivo
    fs.writeFile('../repos.json', buffer, 'utf8', (err) => {
        if (err) {
        console.error('Erro ao escrever no arquivo:', err);
        return;
        }
        console.log('Dados foram escritos no arquivo "teste.json" com sucesso.');
    });
}

module.exports = {publishRepo};
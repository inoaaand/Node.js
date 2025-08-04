const fs = require('fs');

fs.appendFile('log.txt', 'Nova Entrada de Log\n', (err) => {
    if (err) throw err;
    console.log("Entrada Salva!")

});
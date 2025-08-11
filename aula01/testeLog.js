const fs = require('fs');
import { obterInfoSistema } from './testeOS.js';

const info = obterInfoSistema();


fs.appendFile('log.txt', 'Nova Entrada de Log\n', (err, info) => {
    if (err) throw err;
    console.log("Entrada Salva!")
    console.log("Informações do Sistema Operacional:\n");
    console.table(info);

});
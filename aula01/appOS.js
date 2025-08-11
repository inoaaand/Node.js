import { obterInfoSistema } from './testeOS.js';
const info = obterInfoSistema();
console.log("Informações do Sistema Operacional:\n");
console.table(info);
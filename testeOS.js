import os from 'os';

export function obterInfoSistema() {
    return {
        sistema: os.type(),
        plataforma: os.platform(),
        arquitetura: os.arch(),
        homeDir: os.homedir(),
        tempoAtivo: os.uptime(),
    };
}
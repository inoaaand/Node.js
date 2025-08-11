import sampleDados from "../data/sampleDados.js";

export const getAllDados = (req, res) => {
    console.log("Função getAllDados foi chamada!");
    res.json(sampleDados);
};

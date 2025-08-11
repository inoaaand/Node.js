import express from "express";
import dataRoutes from "./routes/route.js"; //data do route renomeado

const App = express();
const PORT = process.env.PORT || 3000;


//Middleware para interpretar o JSON
App.use(express.json());

//Rota da API
App.use('/', dataRoutes);

App.listen(PORT, () => {
    console.log("Servidor executando em localhost:3000");
});
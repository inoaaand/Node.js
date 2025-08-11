import express from "express";
import dataRoutes from "./routes/route.js"; //data do route renomeado

const app = express();
const PORT = process.env.PORT || 3000;


//Middleware para interpretar o JSON
app.use(express.json());

//Rota da API
app.use('/', dataRoutes);

app.listen(PORT, () => {
    console.log("Servidor executando em localhost:3000");
});


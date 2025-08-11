import express from "express";
import cors from "cors";              // Importa o cors
import dataRoutes from "./routes/route.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Middleware CORS (libera todas as origens)
app.use(cors());

// Rota da API
app.use('/', dataRoutes);

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost:${PORT}`);
});

import express from "express";
// import cors from "cors";             
import path from "path";
import dataRoutes from "./routes/route.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.__dirname(__filename)

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

// Middleware CORS (libera todas as origens)
// app.use(cors());

// Rota da API
app.use('/', dataRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost:${PORT}`);
});

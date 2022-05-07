import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express()

app.use(cors()); // origin: 'http://localhost:3333'
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server rodando');
})

// GET = Buscar info
// SET = Cadastrar info
// PUT = Atualizar info
// PATCH = Atualizar informação unica de uma entidade
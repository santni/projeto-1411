import express from "express";
import { config } from "dotenv";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor funcionando!" });
});

app.post("/", (req, res) => {
    // const name = req.body.name;
    const { nome, email, idade } = req.body; // Desestruturação

    if (!nome || !email || !idade) {
        return res.status(400).send({
            message: " Dados inválidos",
        });
    }

    if (idade < 18) {
        return res.status(403).send({
            message: "Idade inválida",
    });
}

if (nome.length < 3) {
    return res.status(406).send({
        message: "Esse nome não é aceitável, digite um nome válido",
});
}

    return res.status(201).send({ nome, email, idade });
});

// 201: Criar

app.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
        return res.status(400).send({
            message: " Dados inválidos",
        });
    }

    return res.status(201).send({ message: `Usuário ${id} atualizado` });
});

app.delete("/:id", (req, res) => {
    const { id } = req.params;

    return res.status(201).send({ message: `Usuário ${id} deletado` });
});

// Deve ser único
app.listen(port, () =>
    console.log(`⚡ Servidor iniciado em http://localhost:${port}`)
);

///////// Estudantes //////////

app.get("/students", (req, res) => {
    return res.status(200).send({ message: "Servidor funcionando!" });
});

app.post("/students", (req, res) => {
    // const name = req.body.name;
    const { nome, email, idade } = req.body; // Desestruturação

    if (!nome || !email || !idade) {
        return res.status(400).send({
            message: " Dados inválidos",
        });
    }

    if (idade < 18) {
        return res.status(403).send({
            message: "Idade inválida",
    });
}

if (nome.length < 3) {
    return res.status(406).send({
        message: "Esse nome não é aceitável, digite um nome válido",
});
}

    return res.status(201).send({ nome, email, idade });
});

// 201: Criar

app.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
        return res.status(400).send({
            message: " Dados inválidos",
        });
    }

    return res.status(201).send({ message: `Usuário ${id} atualizado` });
});

app.delete("/:id", (req, res) => {
    const { id } = req.params;

    return res.status(201).send({ message: `Usuário ${id} deletado` });
});
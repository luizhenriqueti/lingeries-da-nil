import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import produtoRoutes from "./routes/produtoRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/produtos", produtoRoutes);

export default app;
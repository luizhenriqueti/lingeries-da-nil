import { Router } from "express";
import { buscarUsuarios, criaUsuario } from "../controllers/usuarioController.js";

const router = Router();

router.get("/", buscarUsuarios);
router.post("/", criaUsuario)

export default router;
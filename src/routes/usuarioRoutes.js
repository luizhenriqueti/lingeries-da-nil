import { Router } from "express";
import { 
    listarUsuariosController,
    cadastrarUsuarioController,
    buscarPorIdController 
} from "../controllers/usuarioController.js";

const router = Router();

router.get("/", listarUsuariosController)
router.post("/", cadastrarUsuarioController)
router.get("/:id",buscarPorIdController)

export default router;
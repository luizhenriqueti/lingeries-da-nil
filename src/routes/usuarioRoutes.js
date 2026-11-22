import { Router } from "express";
import { 
    listarUsuariosController,
    cadastrarUsuarioController,
    buscarPorIdController,
    excluirUsuarioController
} from "../controllers/usuarioController.js";

const router = Router();

router.get("/", listarUsuariosController)
router.post("/", cadastrarUsuarioController)
router.get("/:id",buscarPorIdController)
router.delete("/delete/:id", excluirUsuarioController)



export default router;
import { Router } from "express";
import {
    listarTodosController
} from "../controllers/produtoController.js"

const router = Router();

router.get("/", listarTodosController)

export default router;
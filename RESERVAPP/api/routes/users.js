import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/prueba",verifyToken,(req,res,next) =>{
   res.send("Hola estoy autenticado!")
})

router.get("/prueba/:id",verifyUser,(req,res,next) =>{
   res.send("Hola estoy autenticado Y puedo eliminar!")
})

//UPDATE
router.put("/:id", updateUser
);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
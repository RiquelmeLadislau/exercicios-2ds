import express from "express"
import produtosRouter from "./produtos"

const router = express.Router()

//prefixo de rota
router.use("/produtos", produtosRouter)

router.get("/ping", (req,res)=>{
  res.json({ pong:true})
})


router.get("/", (req, res) => {
  let nome:string = "Everson"
  let idade: number = 34
  res.json({ nome, idade })
});

export default router
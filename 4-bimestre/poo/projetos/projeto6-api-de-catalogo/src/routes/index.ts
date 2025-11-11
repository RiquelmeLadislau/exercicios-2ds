import express from "express"
import produtosRouter from "./produtos"

const router = express.Router()

//prefixo de rota
router.use("/produtos", produtosRouter)

router.get("/ping", (req,res)=>{
  res.json({ pong:true})
})


router.get("/", (req, res) => {
  let name:string = "Everson"
  let age: number = 3000
  res.json({ name, age })
});

export default router
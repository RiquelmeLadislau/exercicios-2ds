import  Express  from "express"

const router = Express.Router()

const produtos = [
  { "id": 1, "nome": "Mouse Gamer", "preco": 120 },
  { "id": 2, "nome": "Teclado Mecânico", "preco": 350 },
  { "id": 3, "nome": "Monitor Full HD", "preco": 900 }
]

router.get("/",(req,res)=>{
  res.json(produtos)
})

router.get("/:id", (req,res)=>{
  const { id } = req.params
  const index = parseInt(id)
  res.json(produtos[index -1])
})

router.post("/", (req,res)=>{
  res.json({ produtos:[{ "id": 4, "nome": "Headset RGB", "preco": 200 }]})
})

export default router
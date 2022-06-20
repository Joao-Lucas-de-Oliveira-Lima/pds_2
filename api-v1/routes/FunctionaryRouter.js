const router = require("express").Router()

const Functionary = require("../models/Functionary.js")

router.post("/", async (req, res) => {
    const {cpf, nome, salario, profissoes} = req.body

    const functionary = {
        cpf,
        nome,
        salario,
        profissoes,
    }

    try{
        await Functionary.create(functionary)
        res.send("Deu certo")
    }catch(erro){
        res.json("Deu certo")
    }

})

router.get("/", (req, res) =>{
    res.json({msg: "enviado"})
})


module.exports = router
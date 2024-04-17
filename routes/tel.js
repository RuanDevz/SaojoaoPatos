const express = require('express')

const router = express.Router()
const {Tel} = require('../models')
const cors = require('cors')

router.get('/', async (req,res) =>{
    const numbers = req.body
    const getnumbers = await Tel.findAll(numbers)
    res.status(200).json(getnumbers)
})

router.post('/', async (req, res) => {
    try {
        const { Telefone } = req.body;

        const existingNumber = await Tel.findOne({ where: { Telefone } });

        if (existingNumber) {
            return res.status(201).json({ error: "Telefone já cadastrado" });
        }

        const newNumber = await Tel.create({ Telefone });
         res.status(200).json({msg: "Numero cadastrado", newNumber});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Erro ao processar a requisição" });
    }
});





module.exports = router
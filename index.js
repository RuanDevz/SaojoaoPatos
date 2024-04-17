const express = require('express')
const app = express()
const port = 3000
const db = require('./models')
const cors = require('cors')
const TelefoneRouter = require('./routes/tel')

app.use(cors())
app.use(express.json())
app.use('/tel', TelefoneRouter)

db.sequelize.sync().then(() =>{
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
})

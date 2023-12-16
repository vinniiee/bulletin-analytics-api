const express = require('express')

require('dotenv').config()
require('./db/mongoose')
const cors = require('cors')
const userRouter = require('./routers/user')
const bulletinRouter = require('./routers/bulletin')

const app = express()

if(!process.env.PORT || !process.env.MONGO_URI){
    throw new Error("Environmet Variables are not configured.");
}

const port = process.env.PORT || 3000

app.use(cors({origin:'*'}))

app.use(express.json())
// app.use((req,res,next)=>{
//     console.log(req);
//     next();
// })
app.use("/bulletins",bulletinRouter)
app.use(userRouter)

app.use('*',(req,res)=>{
    res.sendStatus(200).send("Up and Running..");
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
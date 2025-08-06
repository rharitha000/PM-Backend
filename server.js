const express=require('express')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

//routes
app.use("/investments",require('./routes/investmentRoutes'))
app.use("/transaction",require('./routes/transactionRoutes'))


//listen to port
app.listen(3000,()=>{
    console.log("#####Server is running on port 3000")
})
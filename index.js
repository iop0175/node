import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    if(name == "dog"){
        res.json({"sound":"멍멍"})
    }else if(name == "cat"){
        res.json({"sound":"야옹"})
    }else{
        res.json({"sound":"알수없음"})
    }
})
app.listen(3000)
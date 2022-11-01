import datas from "./datas/Datas.js"
import express from "express"
import cors from "cors"

const app = express()

app.use(cors());
app.use(express.json());


app.get('/api', (req, res) => {
    res.json(datas)
})

app.listen(5000, () => console.log(`Example app listening on port 5000 !`))

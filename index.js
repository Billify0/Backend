const express = require('express')
const app = express()
const cors = require('cors')
const { APP_PORT } = require('./config')
const { connectDB } = require('./connections')
const { authRouter, productRouter, BillRouter } = require('./routes')

connectDB()

app.use(express.json())
app.use(cors({
  origin: ["https://backend-7d45dv5l4-rishikesh-revandikars-projects.vercel.app/"],
  methods: [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
    "OPTIONS"],
  credentials: true
}))

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);
app.use('/api/bill', BillRouter);



app.listen(APP_PORT, () => console.log(`Server listening on port ${APP_PORT}!`))
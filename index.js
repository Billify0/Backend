const express = require('express')
const app = express()
const cors = require('cors')
const { APP_PORT } = require('./config')
const { connectDB } = require('./connections')
const { authRouter, productRouter,BillRouter } = require('./routes')

connectDB()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);
app.use('/api/Bill', BillRouter);



app.listen(APP_PORT, () => console.log(`Server listening on port ${APP_PORT}!`))
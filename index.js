const express = require('express')
const app = express()
const cors = require('cors')
const { APP_PORT } = require('./config')
const { connectDB } = require('./connections')
const { authRouter } = require('./routes')

connectDB()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/auth', authRouter);


app.listen(APP_PORT, () => console.log(`Server listening on port ${APP_PORT}!`))
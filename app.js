import express from 'express'
import routes from './src/routes/routes.js'

const app = express()

app.listen(8080, () => console.log("app.js sur http://localhost:8080"))
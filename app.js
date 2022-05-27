import express from "express";
import routes from "./src/routes/routes.js";
import initDB from "./src/db/db.js";
import cors from 'cors'

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());// permet de parser en json les requetes http (remplace body-parser)
app.use(cors()) 
app.use(routes);

app.listen(port, () => console.log(`app.js sur http://localhost:${port}`));

initDB();

app.get('/', (req, res)=>{
  res.json('Hello Heroku ! 👋')
})

app.use(({ res }) => {
  const message =
    "Impossible de trouver la ressource demandé ! Vous pouvez essayer une autre URL.";
  res.status(404).json({ message });
});

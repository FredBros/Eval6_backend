import express from "express";
import routes from "./src/routes/routes.js";
import sequelize from "./src/db/sequelize.js";
import initDB from "./src/db/db.js";

const app = express();

app.use(express.json()); // permet de parser en json les requetes http (remplace body-parser)
app.use(routes);

app.listen(8080, () => console.log("app.js sur http://localhost:8080"));

//initDB();

app.use(({ res }) => {
  const message =
    "Impossible de trouver la ressource demandé ! Vous pouvez essayer une autre URL.";
  res.status(404).json({ message });
});

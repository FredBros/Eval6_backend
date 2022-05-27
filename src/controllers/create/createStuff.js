import { ValidationError, UniqueConstraintError } from "sequelize";

const createStuff = (req, res, Model) => {
  Model.create(req.body)
    .then((created) => {
      const message = `L'item ${req.body.code_name} a bien été crée.`;
      res.json({ message, data: created });
    })
    .catch((error) => {
      if (error instanceof ValidationError) {
        // erreur de validation du modèle
        return res.status(400).json({ message: error.message, data: error }); // error.message : message d'erreur du validateur défini dans le modèle
      }
      if (error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      const message =
        "L'item n'a pas pû être créé. Réessayez dans quelques instants";
      res.status(500).json({ message, data: error });
    });
};

export default createStuff;

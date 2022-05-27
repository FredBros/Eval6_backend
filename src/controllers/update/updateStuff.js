import { ValidationError, UniqueConstraintError } from "sequelize";

const updateStuff = (req, res, Model, id) => {
  Model.update(req.body, { where: { code_name: id } })
    .then(() => {
      return Model.findByPk(id).then((updated) => {
        if (updated === null) {
          const message =
            "L'item demandé n'existe pas. Réssayez avec un autre identifiant.";
          return res.status(404).json({ message });
        }
        const message = `L'item ${updated.code_name} a bien été modifié.`;
        res.json({ message, data: updated });
      });
    })
    .catch((error) => {
      if (error instanceof ValidationError) {
        // errreur de validation du modèle
        return res.status(400).json({ message: error.message, data: error });
      }
      if (error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      const message =
        "La modification n'a pas été effectuée. Réessayez dans quelques instants.";
        res.status(500).json({ message, data: error });
    });
};

export default updateStuff;

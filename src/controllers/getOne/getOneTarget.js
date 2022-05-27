// /api/getOneTarget/id

import { Mission, Target } from "../../db/createModels.js";

const getOneTarget = (req, res) => {
  let { id } = req.params;
  Target.findByPk(id, {
    include: [{ model: Mission }],
  })
    .then((target) => {
      if (!target) {
        const message = "La cible demandée n'existe pas.";
        return res.status(400).json(message);
      }
      const message = "La cible a bien été trouvée.";
      res.json({ message, data: target });
    })
    .catch((error) => {
      const message =
        "La cible demandée est inaccessible, réessayez dans un moment.";
      res.status(404).json(message);
    });
};

export default getOneTarget;

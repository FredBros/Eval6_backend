// /api/getOneHideout/id

import { Mission, Hideout } from "../../db/createModels.js";

const getOneHideout = (req, res) => {
  let { id } = req.params;
  Hideout.findByPk(id, {
    include: [{ model: Mission }],
  })
    .then((hideout) => {
      if (!hideout) {
        const message = "La planque demandée n'existe pas.";
        return res.status(400).json(message);
      }
      const message = "La planque a bien été trouvée.";
      res.json({ message, data: hideout });
    })
    .catch((error) => {
      const message =
        "La planque demandée est inaccessible, réessayez dans un moment.";
      res.status(404).json(message);
    });
};

export default getOneHideout;

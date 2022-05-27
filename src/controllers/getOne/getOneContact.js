// /api/getOneContact/id

import { Mission, Contact } from "../../db/createModels.js";

const getOneContact = (req, res) => {
  let { id } = req.params;

  Contact.findByPk(id, {
    include: [{ model: Mission }],
  })
    .then((agent) => {
      if (!agent) {
        const message = "Le contact demandé n'existe pas.";
        return res.status(400).json(message);
      }
      const message = "Le contact a bien été trouvé.";
      res.json({ message, data: agent });
    })
    .catch((error) => {
      const message =
        "Le contact demandé est inaccessible, réessayez dans un moment.";
      res.status(404).json(message);
    });
};

export default getOneContact;

// /api/getOneAgent/id

import { Mission, Agent } from "../../db/createModels.js";

const getOneAgent = (req, res) => {
  let { id } = req.params;

  
  Agent.findByPk(id, {
    include: [{ model: Mission }],
  })
    .then((agent) => {
      if (!agent) {
        const message = "L\'agent demandé n'existe pas.";
        return res.status(400).json(message);
      }
      const message = "L\'agent a bien été trouvé.";
      res.json({ message, data: agent });
    })
    .catch((error) => {
      const message =
        "L\'agent demandé est inaccessible, réessayez dans un moment.";
      res.status(404).json(message);
    });
};

export default getOneAgent;

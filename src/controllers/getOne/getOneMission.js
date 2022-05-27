// /api/getOneMission/id

import {
  Mission,
  Agent,
  Hideout,
  Target,
  Contact,
} from "../../db/createModels.js";

const getOneMission = (req, res) => {
let {id} = req.params
Mission.findByPk(id, {
  include: [
    { model: Agent },
    { model: Target },
    { model: Hideout },
    { model: Contact },
  ],
})
  .then((mission) => {
      if(!mission){
          const message =
      "La mission demandée n'existe pas";
    return res.status(400).json(message);
  };
      
    const message = "La mission a bien été trouvée.";
    res.json({ message, data: mission });
  })
  .catch((error) => {
    const message =
      "La mission demandée est inaccessible, réessayez dans un moment.";
    res.status(404).json(message);
  });
}



export default getOneMission;
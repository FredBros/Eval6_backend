// /api/getAllMissions?id=string&limit=int&offset=int&order=string&direction=ASC||DESC

import { Mission } from "../../db/createModels.js";
import {Op} from 'sequelize'  // Opérateur sequelize pour traiter les query.params

const getAllMissions = (req, res) => {
  let id = req.query.id;
  let limit = parseInt(req.query.limit) || null;
  let offset = parseInt(req.query.offset) || null;
  let order = req.query.order || "code_name";
  let direction = req.query.direction || "ASC";

  if (id) {
    if (id.length < 2) {
      const message =
        "Le terme de recherche doit contenir au moins 2 caractères.";
      return res.status(400).json({ message });
    }
    return Mission.findAndCountAll({
      where: { code_name: { [Op.like]: `%${id}%` } },
      limit,
      offset,
      direction,
      order: [order],
    }).then(({ count, rows }) => {
      const message =
        count < 2
          ? `Il y a ${count} mission qui correspond à la recherche ${id} `
          : `Il y a ${count} missions qui correspondent à la recherche ${id} `;
      res.json({ message, data: rows });
    });
    
  } else {
    Mission.findAndCountAll({
      limit,
      offset,
      direction,
      order: [order],
      
    })
      .then(({ count, rows }) => {
        const message = `La liste des ${count} missions a bien été récupérée.`;
        res.json({ message, data: rows });
      })
      .catch((error) => res.status(500).json(error));
  }
};
export default getAllMissions;

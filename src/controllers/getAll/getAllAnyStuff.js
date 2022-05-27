import { Op } from "sequelize"; // Opérateur sequelize pour traiter les query.params
import {  Mission } from "../../db/createModels.js";


const getAllAnyStuff = (req, res, Model, id, limit, offset, order, direction) => {
  

  if (id) {
    if (id.length < 2) {
      const message =
        "Le terme de recherche doit contenir au moins 2 caractères.";
      return res.status(400).json({ message });
    }
    return Model.findAndCountAll({
      where: { code_name: { [Op.like]: `%${id}%` } },
      include: [{ model: Mission, attributes: ["code_name"] }],
      limit,
      offset,
      direction,
      order: [order],
    }).then(({ count, rows }) => {
      const message =
        count < 2
          ? `Il y a ${count} réponse qui correspond à la recherche ${id} `
          : `Il y a ${count} réponses qui correspondent à la recherche ${id} `;
      res.json({ message, data: rows });
    });
  } else {
    Model.findAndCountAll({
      limit,
      offset,
      direction,
      order: [order],
      include: [{ model: Mission, attributes: ["code_name"] }],
    })
      .then(({ count, rows }) => {
        const message = `La liste des ${count} items a bien été récupérée.`;
        res.json({ message, data: rows });
      })
      .catch((error) => res.status(500).json(error));
  }
};
export default getAllAnyStuff;

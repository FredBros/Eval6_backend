// /api/getAllContacts?id=string&limit=int&offset=int&order=string&direction=ASC||DESC

import { Contact } from "../../db/createModels.js";
import getAllAnyStuff from "./getAllAnyStuff.js";

const getAllContacts = (req, res) => {
  let id = req.query.id;
  let limit = parseInt(req.query.limit) || null;
  let offset = parseInt(req.query.offset) || null;
  let order = req.query.order || "code_name";
  let direction = req.query.direction || "ASC";

  getAllAnyStuff(req, res, Contact, id, limit, offset, order, direction);
};
export default getAllContacts;

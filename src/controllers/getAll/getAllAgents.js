// /api/getAllAgents?id=string&limit=int&offset=int&order=string&direction=ASC||DESC

import { Agent } from "../../db/createModels.js";
import getAllAnyStuff from "./getAllAnyStuff.js";

const getAllAgents = (req, res) => {
  let id = req.query.id;
  let limit = parseInt(req.query.limit) || null;
  let offset = parseInt(req.query.offset) || null;
  let order = req.query.order || "code_name";
  let direction = req.query.direction || "ASC";

  getAllAnyStuff(req, res, Agent, id, limit, offset, order, direction);

};
export default getAllAgents;

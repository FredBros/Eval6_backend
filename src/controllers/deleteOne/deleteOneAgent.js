// api/deleteOneAgent/:id
import { Agent } from "../../db/createModels.js";
import deleteOneStuff from "./deleteOneStuff.js";

const deleteOneAgent = (req, res) => {
  const { id } = req.params;
  deleteOneStuff(req, res, Agent, id);
};

export default deleteOneAgent;

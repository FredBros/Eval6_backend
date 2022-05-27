import { Agent } from "../../db/createModels.js";
import updateStuff from "./updateStuff.js";

const updateAgent = (req, res) => {
  const { id } = req.params;
  updateStuff(req, res, Agent, id);
};

export default updateAgent;

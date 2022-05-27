import { Agent } from "../../db/createModels.js";
import createStuff from "./createStuff.js";

const createAgent = (req, res) => {
  createStuff(req, res, Agent);
};

export default createAgent;

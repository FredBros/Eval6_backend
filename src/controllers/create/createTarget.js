import { Target } from "../../db/createModels.js";
import createStuff from "./createStuff.js";

const createTarget = (req, res) => {
  createStuff(req, res, Target);
};

export default createTarget;

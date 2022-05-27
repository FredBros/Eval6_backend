import { Hideout } from "../../db/createModels.js";
import createStuff from "./createStuff.js";

const createHideout = (req, res) => {
  createStuff(req, res, Hideout);
};

export default createHideout;

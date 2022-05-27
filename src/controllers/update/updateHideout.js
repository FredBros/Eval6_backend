import { Hideout } from "../../db/createModels.js";
import updateStuff from "./updateStuff.js";

const updateHideout = (req, res) => {
  const { id } = req.params;
  updateStuff(req, res, Hideout, id);
};

export default updateHideout;

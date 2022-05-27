// api/deleteOneHideout/:id
import { Hideout } from "../../db/createModels.js";
import deleteOneStuff from "./deleteOneStuff.js";

const deleteOneHideout = (req, res) => {
  const { id } = req.params;
  deleteOneStuff(req, res, Hideout, id);
};

export default deleteOneHideout;

// api/deleteOneTarget/:id
import { Target } from "../../db/createModels.js";
import deleteOneStuff from "./deleteOneStuff.js";

const deleteOneTarget = (req, res) => {
  const { id } = req.params;
  deleteOneStuff(req, res, Target, id);
};

export default deleteOneTarget;

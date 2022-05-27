// api/deleteOneMission/:id
import { Mission } from "../../db/createModels.js";
import deleteOneStuff from "./deleteOneStuff.js";

const deleteOneMission = (req, res) => {
  const { id } = req.params;
  deleteOneStuff(req, res, Mission, id);
};

export default deleteOneMission;

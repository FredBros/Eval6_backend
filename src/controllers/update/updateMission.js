import { Mission } from "../../db/createModels.js";
import updateStuff from "./updateStuff.js";

const updateMission = (req, res) => {
  const { id } = req.params;
  updateStuff(req, res, Mission, id);
};

export default updateMission;

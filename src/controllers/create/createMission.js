import { Mission } from "../../db/createModels.js";
import createStuff from "./createStuff.js";

const createMission = (req, res) => {
  createStuff(req, res, Mission);
};

export default createMission;

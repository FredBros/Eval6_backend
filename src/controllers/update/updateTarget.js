import { Target } from "../../db/createModels.js";
import updateStuff from "./updateStuff.js";

const updateTarget= (req, res) =>{
    const {id} = req.params
    updateStuff(req, res, Target, id);
}

export default updateTarget;
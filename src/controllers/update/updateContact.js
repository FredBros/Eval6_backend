import { Contact } from "../../db/createModels.js";
import updateStuff from "./updateStuff.js";

const updateContact = (req, res) => {
  const { id } = req.params;
  updateStuff(req, res, Contact, id);
};

export default updateContact;

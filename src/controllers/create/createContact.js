import { Contact } from "../../db/createModels.js";
import createStuff from "./createStuff.js";

const createContact = (req, res) => {
  createStuff(req, res, Contact);
};

export default createContact;

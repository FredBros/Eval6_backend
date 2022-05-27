// api/deleteOneContact/:id
import { Contact } from "../../db/createModels.js";
import deleteOneStuff from "./deleteOneStuff.js";

const deleteOneContact = (req, res) => {
  const { id } = req.params;
  deleteOneStuff(req, res, Contact, id);
};

export default deleteOneContact;

import getAllMissions from "../controllers/getAll/getAllMissions.js";
import getOneMission from "../controllers/getOne/getOneMission.js";
import getOneTarget from "../controllers/getOne/getOneTarget.js";
import getOneAgent from "../controllers/getOne/getOneAgent.js";
import getOneHideout from "../controllers/getOne/getOneHideout.js";
import getOneContact from "../controllers/getOne/getOneContact.js";
import getAllAgents from "../controllers/getAll/getAllAgents.js";
import getAllContacts from "../controllers/getAll/getAllContacts.js";
import getAllTargets from "../controllers/getAll/getAllTargets.js";
import getAllHideouts from "../controllers/getAll/getAllHideouts.js";
import deleteOneTarget from "../controllers/deleteOne/deleteOneTarget.js";
import deleteOneAgent from "../controllers/deleteOne/deleteOneAgent.js";
import deleteOneHideout from "../controllers/deleteOne/deleteOneHideout.js";
import deleteOneContact from "../controllers/deleteOne/deleteOneContact.js";
import deleteOneMission from "../controllers/deleteOne/deleteOneMission.js";
import updateTarget from "../controllers/update/updateTarget.js";
import updateAgent from "../controllers/update/updateAgent.js";
import updateMission from "../controllers/update/updateMission.js";
import updateContact from "../controllers/update/updateContact.js";
import updateHideout from "../controllers/update/updateHideout.js";
import createTarget from "../controllers/create/createTarget.js";
import createMission from "../controllers/create/createMission.js";
import createContact from "../controllers/create/createContact.js";
import createHideout from "../controllers/create/createHideout.js";
import createAgent from "../controllers/create/createAgent.js";
import login from "../controllers/login.js";


import auth from "../auth/auth.js";
import { Router } from "express";
const router = Router();


// get all
router.get("/api/getAllMissions", getAllMissions);
router.get("/api/getAllAgents", auth, getAllAgents);
//get one
router.get("/api/getOneMission/:id", getOneMission);
router.get("/api/getOneTarget/:id", auth, getOneTarget);
router.get("/api/getOneAgent/:id", auth, getOneAgent);
router.get("/api/getOneHideout/:id", auth, getOneHideout);
router.get("/api/getOneContact/:id", auth, getOneContact);
router.get("/api/getAllContacts", auth, getAllContacts);
router.get("/api/getAllTargets", auth, getAllTargets);
router.get("/api/getAllHideouts", auth, getAllHideouts);
// delete
router.delete("/api/deleteOneTarget/:id", auth, deleteOneTarget);
router.delete("/api/deleteOneAgent/:id", auth, deleteOneAgent);
router.delete("/api/deleteOneHideout/:id", auth, deleteOneHideout);
router.delete("/api/deleteOneContact/:id", auth, deleteOneContact);
router.delete("/api/deleteOneMission/:id", auth, deleteOneMission);
// update
router.put("/api/updateTarget/:id", auth, updateTarget);
router.put("/api/updateAgent/:id", auth, updateAgent);
router.put("/api/updateMission/:id", auth, updateMission);
router.put("/api/updateContact/:id", auth, updateContact);
router.put("/api/updateHideout/:id", auth, updateHideout);
// create
router.post("/api/createTarget", auth, createTarget);
router.post("/api/createMission", auth, createMission);
router.post("/api/createContact", auth, createContact);
router.post("/api/createAgent", auth, createAgent);
router.post("/api/createHideout", auth, createHideout);
// login
router.post("/api/login", login);






export default router;

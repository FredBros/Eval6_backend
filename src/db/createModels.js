import sequelize from "./sequelize.js";
import { DataTypes } from "sequelize";

// importation des Models
import AgentModel from "../models/agent.js";
import ContactModel from "../models/contact.js";
import HideoutModel from "../models/hideout.js";
import MissionModel from "../models/mission.js";
import TargetModel from "../models/target.js";
import UserModel from "../models/user.js";

// On instancie les modèles auprés de sequelize
 const Hideout = HideoutModel(sequelize, DataTypes);
 const Mission = MissionModel(sequelize, DataTypes);
 const Agent = AgentModel(sequelize, DataTypes);
 const Target = TargetModel(sequelize, DataTypes);
 const Contact = ContactModel(sequelize, DataTypes);
 const User = UserModel(sequelize, DataTypes);


export  { Mission, Agent, Hideout, Target, Contact, User };
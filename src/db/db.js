import sequelize from "./sequelize.js";
import { Sequelize, DataTypes } from "sequelize";
import createInstance from "./createInstance.js";
import missionAddJoinTable from "./missionAddJoinTable.js";


// importation des mocks
import agents from "../mocks/mock_agent.js";
import agents_missions from "../mocks/mock_agents_missions.js";
import contacts from "../mocks/mock_contact.js";
import contacts_missions from "../mocks/mock_contacts_missions.js";
import hideouts from "../mocks/mock_hideout.js";
import hideouts_missions from "../mocks/mock_hideouts_missions.js";
import missions from "../mocks/mock_missions.js";
import targets from "../mocks/mock_targets.js";
import missions_targets from "../mocks/mock_missions_targets.js";
import users from "../mocks/mock_users.js";

// On instancie les modèles auprés de sequelize
import {
  Mission,
  Agent,
  Hideout,
  Target,
  Contact,
  User,
} from "./createModels.js";


// On créé les associations

Mission.belongsToMany(Hideout, {
  through: "hideouts_missions",
  foreignKey: "mission_code_name",
});
Hideout.belongsToMany(Mission, {
  through: "hideouts_missions",
  foreignKey: "hideout_code_name",
});

Mission.belongsToMany(Target, {
  through: "missions_targets",
  foreignKey: "mission_code_name",
});
Target.belongsToMany(Mission, {
  through: "missions_targets",
  foreignKey: "target_code_name",
});

Agent.belongsToMany(Mission, {
  through: "agents_missions",
  foreignKey: "agent_code_name",
});
Mission.belongsToMany(Agent, {
  through: "agents_missions",
  foreignKey: "mission_code_name",
});

Contact.belongsToMany(Mission, {
  through: "contacts_missions",
  foreignKey: "contact_code_name",
});
Mission.belongsToMany(Contact, {
  through: "contacts_missions",
  foreignKey: "mission_code_name",
});
Hideout.belongsToMany(Mission, {
  through: "hideouts_missions",
  foreignKey: "hideout_code_name",
});
Mission.belongsToMany(Hideout, {
  through: "hideouts_missions",
  foreignKey: "mission_code_name",
});

const initDB = async () => {
  return sequelize
    .sync()
    .then(() => {
      // On remplie les tables (mock, model, msg)
      createInstance(agents, Agent, "agents");
      createInstance(missions, Mission, "missions");
      createInstance(targets, Target, "targets");
      createInstance(hideouts, Hideout, "hideouts");
      createInstance(contacts, Contact, "contacts");
      // on crée un compte Admin
      createInstance(users, User, "users");
      
    })
    .catch((error) => console.log(error))
    .then(() => {
      setTimeout(() => {
        // On remplie les tables d'associations (mock, MissionModel, ChildModel, child_code_name du fichier mock)
        missionAddJoinTable(agents_missions, Mission, Agent, "agent_code_name");
        missionAddJoinTable(
          missions_targets,
          Mission,
          Target,
          "target_code_name"
        );
        missionAddJoinTable(
          hideouts_missions,
          Mission,
          Hideout,
          "hideout_code_name"
        );
        missionAddJoinTable(
          contacts_missions,
          Mission,
          Contact,
          "contact_code_name"
        );
      }, 5000);
    })

    .catch((error) => console.log(error));
  console.log("connexion à la base de données");
};

export default initDB;

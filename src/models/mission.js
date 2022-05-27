import  validMissionStatus from "../db/types/missionsStatus.js"
import validSpecialities from "../db/types/specialities.js"
import validMissionTypes from "../db/types/missionsTypes.js";


const MissionModel = (sequelize, DataTypes) =>
  sequelize.define("mission", {
    code_name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: {
        msg: "Ce nom de code est déja utilisé.",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le titre ne peut pas être vide." },
        notNull: { msg: "Le titre est une propriété requise." },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "La description ne peut pas être vide." },
        notNull: { msg: "La description est une propriété requise." },
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le pays ne peut pas être vide." },
        notNull: { msg: "Le pays est une propriété requise." },
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isTypeValid(value) {
          if (!value) {
            throw new Error("Une mision doit avoir un type");
          }
          if (!validMissionTypes.includes(value)) {
            throw new Error(
              `Le type d\'une mission doit appartenir à la liste suivante : ${validMissionTypes}`
            );
          }
        },
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isTypeValid(value) {
          if (!value) {
            throw new Error("Une mision doit avoir un status");
          }
          if (!validMissionStatus.includes(value)) {
            throw new Error(
              `Le status d\'une mission doit appartenir à la liste suivante : ${validMissionStatus}`
            );
          }
        },
      },
    },
    specialities: {
      type: DataTypes.STRING,
      allowNull: false,
      // Getter : DB -> API REST ( string -> array )
      get() {
        return this.getDataValue("specialities").split(",");
      },
      // Setter : API REST -> DB ( array -> string )
      set(specialities) {
        this.setDataValue("specialities", specialities.join());
      },
      validate: {
        isSpecialitiesValid(value) {
          // value récupérée dans la DB, donc une string
          if (!value) {
            throw new Error(
              "Une mission doit requérir au moins une spécialité"
            );
          }
          value.split(",").forEach((speciality) => {
            if (!validSpecialities.includes(speciality)) {
              throw new Error(
                `Les spécialités requises pour une mission doivent appartenir à la liste suivante ${validSpecialities}`
              );
            }
          });
        },
      },
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: { msg: "La date ne peut pas être vide." },
        notNull: { msg: "La date est une propriété requise." },
        isDate: { msg: "le format de la date n'est pas valide" },
      },
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
        isDate: { msg: "le format de la date n'est pas valide" },
      },
    },
  });

export default MissionModel;
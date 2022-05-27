import validHideoutTypes from "../db/types/hideoutTypes.js";

const  HideoutModel = (sequelize, DataTypes) => 
  sequelize.define("hideout", {
    code_name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: {
        msg: "Ce nom de code est déja utilisé.",
      },
      validate: {
        notEmpty: { msg: "Le nom de code ne peut pas être vide." },
        notNull: { msg: "Le nom de code est une propriété requise." },
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "L'adresse ne peut pas être vide." },
        notNull: { msg: "L'adresse est une propriété requise." },
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: { msg: "Le pays entré n'est pas valide" },
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
            throw new Error("Une planque doit avoir un type");
          }
          if (!validHideoutTypes.includes(value)) {
            throw new Error(
              `Le type d\'une planque doit appartenir à la liste suivante : ${validHideoutTypes}`
            );
          }
        },
      },
    },
  });
;

export default HideoutModel
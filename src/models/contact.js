const ContactModel = (sequelize, DataTypes) => {
  return sequelize.define("Contact", {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le nom ne peut pas être vide." },
        notNull: { msg: "Le nom est une propriété requise." },
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le prénom ne peut pas être vide." },
        notNull: { msg: "Le prénom est une propriété requise." },
      },
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: { msg: "La date entrée n'est pas valide" },
        notNull: { msg: "La date de naissance est une propriété requise." },
        notEmpty: { msg: "La date de naissance ne peut pas être vide." },
      },
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: { msg: "Le pays entré n'est pas valide" },
        notNull: { msg: "Le pays est une propriété requise." },
        notEmpty: { msg: "Le pays ne peut pas être vide." },
      },
    },
  });
};

export default ContactModel
import bcrypt from "bcrypt";

const UserModel = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le nom d'utilisateur ne peut pas être vide." },
        notNull: { msg: "Le nom d'utilisateur est une propriété requise." },
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "L'adresse mail ne peut pas être vide." },
        notNull: { msg: "L'adresse mail est une propriété requise." },
      },
      unique: {
        msg: "Cette adresse email est déja utilisé.",
      },
      validate: {
        isEmail: { msg: "Cette adresse mail n'est pas valide" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // Setter : API REST -> DB : on hash le mot de passe
      set(value) {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(value, salt)
        this.setDataValue("password", hash)
        
      },
      validate: {
        notEmpty: { msg: "Le mot de passe ne peut pas être vide." },
        notNull: { msg: "Le mot de passe est une propriété requise." },
      },
    },
  });
};

export default UserModel;

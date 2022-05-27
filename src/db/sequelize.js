import {Sequelize} from 'sequelize'


  // Connexion à la DB Mariadb avec Sequelize
  // en mode dev
  // npm install sequelize --save
  // npm install mariadb --save
  // creer la DB avec XAMPP / phpMyAdmin

  const sequelize = new Sequelize("eval6", "root", "", {
    host: "localhost",
    dialect: "mariadb",
    dialectOptions: {
      timezone: "Etc/GMT-2",
    },
    logging: false,
  });

export default sequelize
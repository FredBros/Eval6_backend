import {Sequelize} from 'sequelize'

let sequelize;

// Connexion à la DB Mariadb avec Sequelize
// en mode prod
if (process.env.NODE_ENV === "production") {
  // Sequelize ( "DatabaseName", "user", "password")
  sequelize = new Sequelize(
    "XXXXXXXXX",
    "XXXXXXXXXXXXX",
    "XXXXXXXXXXXXX",
    {
      host: "XXXXXXXXXXXX.rds.amazonaws.com",
      dialect: "mariadb",
      dialectOptions: {
        timezone: "Etc/GMT-2",
      },
      logging: true,
    }
  );
} else {
  // Connexion à la DB Mariadb avec Sequelize
  // en mode dev
  // npm install sequelize --save
  // npm install mariadb --save
  // creer la DB avec XAMPP / phpMyAdmin

  sequelize = new Sequelize("eval6", "root", "", {
    host: "localhost",
    dialect: "mariadb",
    dialectOptions: {
      timezone: "Etc/GMT-2",
    },
    logging: false,
  });
}
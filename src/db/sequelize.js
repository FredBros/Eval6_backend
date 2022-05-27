import {Sequelize} from 'sequelize'


  // Connexion à la DB Mariadb avec Sequelize
  // en mode dev
  // npm install sequelize --save
  // npm install mariadb --save
  // creer la DB avec XAMPP / phpMyAdmin

  let sequelize

if(process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(
    process.env.JAWSDB_DB_NAME,
    process.env.JAWSDB_USERNAME,
    process.env.JAWSDB_PW,

    {
      host: process.env.JAWSDB_HOST,
      dialect: "mariadb",
      dialectOptions: {
        timezone: "Etc/GMT-2",
      },
      logging: true,
    }
  );
} else {
   sequelize = new Sequelize("eval6", "root", "", {
    host: "localhost",
    dialect: "mariadb",
    dialectOptions: {
      timezone: "Etc/GMT-2",
    },
    logging: false,
  })}

export default sequelize
// On remplie les tables (mock (array of objects), sequelizeModel, tableName(string))
const createInstance = (datas, instanceModel, tableName) => {
  datas.map((obj) => {
    instanceModel.create({
      ...obj,
    });
  });
  console.log(`La table ${tableName} a bien été remplie`);
};

export default createInstance;

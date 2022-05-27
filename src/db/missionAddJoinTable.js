const missionAddJoinTable = (
  mock_misson_child,
  Mission,
  ChildTable,
  childKey
) => {
  mock_misson_child.map((obj) => {
    const missionId = obj.mission_code_name;
    const childId = obj[childKey];
    return Mission.findByPk(missionId)
      .then((mission) => {
        if (!mission) {
          console.log("Mission not found!");
          return null;
        }
        //console.log(mission);
        return ChildTable.findByPk(childId).then((child) => {
          if (!child) {
            console.log("Child not found!");
            return null;
          }
          //console.log(child);
          child.addMission(mission);
        });
      })
      .catch((err) => {
        console.log(">> Error while adding Mission to Child: ", err);
      });
  });
  console.log(
    `La table de jointure mission_${childKey.split("_")[0]}s a bien été remplie`
  );
};

export default missionAddJoinTable;

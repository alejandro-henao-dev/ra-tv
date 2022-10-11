import Sequelize from "sequelize";


export const SerieTagModelContructor = (context:any) => {
  context.define('serie-tag', {
    tagId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    serieId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });
}
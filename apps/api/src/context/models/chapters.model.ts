import Sequelize from "sequelize";


export const ChaptersModelContructor = (context:any) => {
  context.define('chapters', {
    number: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false
    },
    serieId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    watched: {
      type: Sequelize.BOOLEAN
    },
  }, {
    freezeTableName: true
  });
}
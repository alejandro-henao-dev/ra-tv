import Sequelize from "sequelize";


export const TagModelContructor = (context:any) => {
  return context.define('tag', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true
  });
}
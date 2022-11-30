import Sequelize from "sequelize";


export const SerieModelContructor = (context:any) => {
  return context.define('serie', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
    },
    favorite: {
      type: Sequelize.BOOLEAN
    },
    waitingFor: {
      type: Sequelize.BOOLEAN
    },
    watching: {
      type: Sequelize.BOOLEAN
    },
    watched: {
      type: Sequelize.BOOLEAN
    },
    nextChapter: {
      type: Sequelize.INTEGER,
    }
  }, {
    freezeTableName: true
  });
}
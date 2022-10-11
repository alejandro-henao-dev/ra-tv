
// node_modules imports
import os from 'os'
import path from "path";
import {Sequelize} from "sequelize"
import configuration from '@feathersjs/configuration'

// model imports
import { SerieModelContructor } from "./models/serie.model";
import { TagModelContructor } from "./models/tags.model";
import { SerieTagModelContructor } from "./models/serieTag.model";
import { ChaptersModelContructor } from "./models/chapters.model";

const config = configuration()()

const sequelize = new Sequelize('sequelize', '', '', {
  dialect: 'sqlite',
  storage: process.env.NODE_ENV?.toLowerCase() == 'production'
    ? path.join(os.homedir(),config.db)
    : path.join(config.db),
  logging: false
});

export const SerieModel = SerieModelContructor(sequelize)
export const TagModel = TagModelContructor(sequelize)
export const SerieTagModel = SerieTagModelContructor(sequelize)
export const ChapterModel = ChaptersModelContructor(sequelize)




export default sequelize

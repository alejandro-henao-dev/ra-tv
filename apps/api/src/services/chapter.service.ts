import service from "feathers-sequelize"
import {ChapterModel} from "../context/index"

export const chapterService = service({
  Model: ChapterModel,
  paginate: {
    default: 2,
    max: 4
  }
})

export default chapterService
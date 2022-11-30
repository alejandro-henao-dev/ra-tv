import service from "feathers-sequelize"
import  context  from "../context"


export const chapterService = service({
  Model: context.models.chapters,
  paginate: {
    default: 2,
    max: 4
  }
})

export default chapterService
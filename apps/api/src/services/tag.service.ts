import service from "feathers-sequelize"
import  context  from "../context"


export const tagService = service({
  Model: context.models.tag,
  paginate: {
    default: 2,
    max: 4
  }
})

export default tagService
import service from "feathers-sequelize"
import  {TagModel}  from "../context"


export const tagService = service({
  Model: TagModel,
  paginate: {
    default: 2,
  }
})

export default tagService
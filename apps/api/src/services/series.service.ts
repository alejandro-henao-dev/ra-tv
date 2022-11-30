import service from "feathers-sequelize"
import  context  from "../context"


export const seriesService = service({
  Model: context.models.serie,
  paginate: {
    default: 2,
    max: 4
  }
})

export default seriesService
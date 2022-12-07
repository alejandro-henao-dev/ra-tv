import service from "feathers-sequelize"
import  {SerieModel}  from "../context"


export const seriesService = service({
  Model: SerieModel,
  paginate: {
    default: 2,
  }
})

export default seriesService
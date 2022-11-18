import { Title } from "../types"

export const TitleModel = (data?:any): Title =>{
  return {
    name: data?.name ?? "" ,
    href: data?.href ?? "",
    viewed: Boolean(data?.viewed),
    saved: Boolean(data?.saved) ,
  }
}


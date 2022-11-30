import { Title } from "../types"

export const TitleModel = (data?:any): Title =>{
  return {
    id: data?.id,
    name: data?.title ?? "" ,
    href: data?.link ?? "",
    viewed: Boolean(data?.viewed),
    saved: Boolean(data?.id) ,
  }
}


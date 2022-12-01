import { elementHandler } from "../utils/elementHandler"

export const show = (selector: string | HTMLElement | Element, multiple=false) => {
  elementHandler(
    selector,
    (element:any) => {
      element.style.display="block"
    }
  )
  
}
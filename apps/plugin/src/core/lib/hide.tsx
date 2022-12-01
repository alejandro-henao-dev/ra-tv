import { elementHandler } from "../utils/elementHandler"

export const hide = (selector: string | HTMLElement | Element, multiple=false) => {
  elementHandler(
    selector,
    (element:any) => {
      element.style.display="none"
    }
  )
  
}
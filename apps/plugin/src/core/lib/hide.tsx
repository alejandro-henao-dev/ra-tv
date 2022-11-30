import { elementHandler } from "../utils/elementHandler"

export const hide = (selector: string | HTMLElement, multiple=false) => {
  elementHandler(
    selector,
    (element) => {
      element.remove()
    }
  )
  
}
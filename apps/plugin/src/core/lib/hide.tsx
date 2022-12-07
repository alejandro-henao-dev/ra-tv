import { elementHandler } from "../utils/elementHandler"

export const hide = (
  selector: string | HTMLElement | Element,
  options?: {multiple?:boolean, removeChild?: boolean}
) => {
  elementHandler(
    selector,
    (element: any) => {
      if (!options?.removeChild) {
        element.style.display="none"  
      } else {
        element.remove()
      }
    },
    {
      multi: options?.multiple
    }
  )
  
}
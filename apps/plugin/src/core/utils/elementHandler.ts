import { selectElement } from "./selectElement"

export const elementHandler = (
  target: string | Element,
  callback:(element:Element)=>void,
  options: {
    multi?: boolean
  }={}
) => {

  if (!target) {
    return
  }
  
  const targetElement =selectElement(target,options.multi)
  
  if (options.multi) {
    (Array.from(targetElement) as Element[])
      .forEach(ele => callback(ele))
  } else {
    callback(targetElement)
  }
}

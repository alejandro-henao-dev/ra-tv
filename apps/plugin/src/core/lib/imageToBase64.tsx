import { elementHandler } from "../utils/elementHandler"
import { selectElement } from "../utils/selectElement"
import { base64 } from "./base64Codex"
import { getAbsUrl } from "./getAbsUrl"

export const imageToBase64 = async (element: string | Element,attr='src') => {
  
  const target = selectElement(element)
  const url = new URL(getAbsUrl(target.getAttribute(attr)))

  const res = await fetch(url.pathname)
  
  const buf = await res.arrayBuffer()
  
  return base64.encode(buf)
 
}
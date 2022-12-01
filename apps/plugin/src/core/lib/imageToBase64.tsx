import { elementHandler } from "../utils/elementHandler"
import { selectElement } from "../utils/selectElement"
import { base64 } from "./base64Codex"

export const imageToBase64 = async (element: string | Element,attr='src') => {
  
  const target = selectElement(element)
  const src = target.getAttribute(attr)
  let domain=""
  if (src.match(/^\//)) {
    domain=window.location.origin
  }
  const url =new URL(`${domain}${src}`)

  const res = await fetch(url.pathname)
  
  const buf = await res.arrayBuffer()
  
  return base64.encode(buf)
 
}
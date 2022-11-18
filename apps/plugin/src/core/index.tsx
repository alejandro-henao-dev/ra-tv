import { inject } from "./lib/inject";
import { Plugin } from "./types";

let state = {}

export const core = (plugins: Plugin[]): void => {
  let setNext=false
  
  const props= {
    setState: (cb)=>{ state = cb(state) },
    next: () => { setNext = true }
  }


  plugins.forEach(plugin => {
    if (!setNext) {
      plugin(props)  
      return
    }
    setNext=false
  })


}
import { inject } from "./lib/inject";
import { CoreConfig, Plugin } from "./types";

let state = {}

export const core = (config:CoreConfig,plugins: Plugin[]): void => {
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
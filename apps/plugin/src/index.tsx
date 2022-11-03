import { Core, core, Plugin } from "./core";
import { plugins as corePlugins} from "./plugins";


const plugins:Plugin[] = [...corePlugins] as any[]

export const addPlugin = (plugin:any) => {
  plugins.push(plugin)
}

export const raTv = () => {
  
  let localCore: Core;

  plugins.forEach(plugin => {
    if (!localCore) {
      localCore=core(plugin)
    }
    localCore=localCore(plugin)
  })
  
}

interface CustomWindow extends Window{
  raTv: ()=>void
}

declare var window: CustomWindow

if (window) {
  window.raTv=raTv
}




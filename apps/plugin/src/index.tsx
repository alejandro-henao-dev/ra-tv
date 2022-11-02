import { core } from "./core";
import { plugins as corePlugins} from "./plugins";


const plugins = [...corePlugins] as any[]

export const addPlugin = (plugin:any) => {
  plugins.push(plugin)
}

export const raTv = () => {
  plugins.forEach(core)  
}

interface CustomWindow extends Window{
  raTv: ()=>void
}

declare var window: CustomWindow

if (window) {
  window.raTv=raTv
}




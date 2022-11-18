import { core } from "./core";
import { CoreConfig, Plugin } from "./core/types";
import { plugins as corePlugins} from "./plugins";


const plugins:Plugin[] = [...corePlugins] as any[]

export const addPlugin = (plugin:any) => {
  plugins.push(plugin)
}

export const raTv = (config?:CoreConfig,userplugins:Plugin[]=[]) => {
  core(config, [...plugins, ...userplugins] )
}

interface CustomWindow extends Window{
  raTv: ()=>void
}

declare var window: CustomWindow

if (window) {
  window.raTv=raTv
}




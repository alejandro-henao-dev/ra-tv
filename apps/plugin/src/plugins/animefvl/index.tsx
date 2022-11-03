import { Core, CoreProps } from "../../core"

export const animeFvl = (core: CoreProps) => {
  
  // check domain in which this plugin will work,
  // if the domain is no supported, the plugin should exit
  if (window.location.host !== "www3.animeflv.net") {
    return core
  }
  
 
}
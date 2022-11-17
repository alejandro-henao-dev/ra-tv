import { CoreProps, Plugin } from "../../core/types"
import { detail } from "./detail"
import { epidose } from "./episode"
import { gallery } from "./gallery"


export const animeFvl: Plugin = (core: CoreProps) => {
  
  
  // check domain in which this plugin will work,
  // if the domain is no supported, the plugin should exit
  if (window.location.host !== "www3.animeflv.net") {
    return core.next()
  }


  if (window.location.pathname == "/browse") {
    gallery(core)
  }
  
  if (window.location.pathname.match(/^\/anime\/[^\/]+\/?$/)) {
    detail(core)
  }

   if (window.location.pathname.match(/^\/ver\/[^\/]+\/?$/)) {
    epidose(core)
  }
 
}


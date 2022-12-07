import { getAbsUrl } from "../../../core/lib/getAbsUrl";
import { hide } from "../../../core/lib/hide";
import { inject } from "../../../core/lib/inject";
import { CoreProps } from "../../../core/types";
import { EpisodeEntry } from "./episodeEntry";

export const epidose = (core:CoreProps) => {
  const cardSelector = ".CapOptns"
  
  hide(cardSelector + " .fa-download",{removeChild:true})
  hide(cardSelector + " .fa-eye",{removeChild:true})
  hide(cardSelector + " .fa-lightbulb-o",{removeChild:true})
  hide(cardSelector + " .fa-flag-o",{removeChild:true})

  const container = document.querySelector(cardSelector)
    
  const titleLinkElement=document.querySelector('.CapNvLs')

  const titleHref=getAbsUrl(titleLinkElement.getAttribute("href"))
      // ele.style.position = "relative";

      // const name = ele.querySelector(".Title").textContent
      // const link = ele.querySelector("a").getAttribute('href')
      // const href = getAbsUrl(link)

      const episode = {
        titleHref,
        href:window.location.href
      }
      
      inject(container,
        <EpisodeEntry {...episode} />
      )
}
import { hide } from "../../../core/lib/hide";
import { inject } from "../../../core/lib/inject";
import { CoreProps } from "../../../core/types";
import { EpisodeEntry } from "./episodeEntry";

export const epidose = (core:CoreProps) => {
  const cardSelector = ".CapOptns"
  
  hide(cardSelector + " .fa-download")
  hide(cardSelector + " .fa-eye")
  hide(cardSelector + " .fa-lightbulb-o")
  hide(cardSelector + " .fa-flag-o")

  Array.from(document.querySelectorAll(cardSelector))
    .forEach((ele: HTMLElement) => {
      
      // ele.style.position = "relative";

      // const name = ele.querySelector(".Title").textContent
      // const link = ele.querySelector("a").getAttribute('href')
      // const href = getAbsUrl(link)

      const title = {
        name:"",
        href:""
      }
      
      inject(ele,
        <EpisodeEntry {...title} />
      )
    }) 
}
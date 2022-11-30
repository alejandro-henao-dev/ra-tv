import { CoreProps } from "../../../core/types";
import { getAbsUrl } from "../../../core/lib/getAbsUrl";
import { inject } from "../../../core/lib/inject";
import { hide } from "../../../core/lib/hide";
import { DetailEntry } from "./detailEntry";


export const detail = (core: CoreProps) => {
  const cardSelector = "ul#episodeList li:not(.Next)"
  

  Array.from(document.querySelectorAll(cardSelector))
    .forEach((ele: HTMLElement) => {
      
      ele.style.position = "relative";
      hide(ele.querySelector('.Stts') as any)
      
      const name = ele.querySelector(".Title").textContent
      const link = ele.querySelector("a").getAttribute('href')
      const href = getAbsUrl(link)

      const title = {
        name,
        href
      }
      
      inject(ele,
        <DetailEntry {...title} />
      )
    })
}
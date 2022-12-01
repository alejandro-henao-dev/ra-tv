import { getAbsUrl } from "../../../core/lib/getAbsUrl";
import { imageToBase64 } from "../../../core/lib/imageToBase64";
import { inject } from "../../../core/lib/inject";
import { CoreProps } from "../../../core/types";
import { GalleryEntry } from "./galleryEntry";


export const gallery = (core:CoreProps) => {
  const cardSelector = "ul.ListAnimes li"


  Array.from(document.querySelectorAll('ul.ListAnimes li'))
    .forEach(async (ele:HTMLElement) => {
      ele.style.position = "relative"
      const name = ele.querySelector(".Title").textContent
      const link = ele.querySelector("a").getAttribute('href')
      const href = getAbsUrl(link)
      const image = await imageToBase64(ele.querySelector("img"))

      const title = {
        name,
        href,
        image
      }
      
      inject(ele,
        <GalleryEntry {...title} />
      )
    })
 
}
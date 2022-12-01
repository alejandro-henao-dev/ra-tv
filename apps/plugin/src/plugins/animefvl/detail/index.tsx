import { CoreProps } from "../../../core/types";
import { getAbsUrl } from "../../../core/lib/getAbsUrl";
import { inject } from "../../../core/lib/inject";
import { hide } from "../../../core/lib/hide";
import { DetailEntry } from "./detailEntry";
import { GalleryEntry } from "../gallery/galleryEntry";

import styles from "./index.scss"
import { imageToBase64 } from "../../../core/lib/imageToBase64";

export const detail = async (core: CoreProps) => {
  const episodes= Array.from(document.querySelectorAll("ul#episodeList li:not(.Next)"))
  const serieTitle = document.querySelector("h1.Title").textContent
  const descriptionBox = document.querySelector("section.WdgtCn:nth-child(1)") as HTMLElement
  const image = await imageToBase64(".Image > figure:nth-child(1) > img:nth-child(1)")
  
  descriptionBox.style.position = "relative"
  
  inject(descriptionBox,
    <GalleryEntry
      name={serieTitle}
      href={window.location.href}
      image={image}
      className={ styles.serieMenu} 
    />
  )
  

  
  episodes.forEach((ele: HTMLElement) => {
    
    ele.style.position = "relative";
    hide(ele.querySelector('.Stts') as any)
    inject(ele,
      <DetailEntry/>
    )

  })
}
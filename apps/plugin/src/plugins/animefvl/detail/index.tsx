import { CoreProps } from "../../../core/types";
import { getAbsUrl } from "../../../core/lib/getAbsUrl";
import { inject } from "../../../core/lib/inject";
import { hide } from "../../../core/lib/hide";
import { DetailEntry } from "./detailEntry";
import { GalleryEntry } from "../gallery/galleryEntry";

import styles from "./index.scss"
import { imageToBase64 } from "../../../core/lib/imageToBase64";
import { useState } from "react";
import { addWrapper } from "../../../core/utils/addWrapper";

export const detail = async (core: CoreProps) => {


  const titleName = document.querySelector("h1.Title").textContent

  const descriptionBox = document.querySelector("section.WdgtCn:nth-child(1)") as HTMLElement
  descriptionBox.style.position = "relative"

  const titleImage = await imageToBase64(".Image > figure:nth-child(1) > img:nth-child(1)")

  const episodes= Array.from(document.querySelectorAll("ul#episodeList li:not(.Next)")).map((ele: HTMLElement) => {
    
    const wrapper = addWrapper(ele)
    
    return {
      wrapper,
      originalElement:ele
    }
  
  })
  
  const props = {
    episodes,
    titleName,
    titleImage,
    titleMenuContainer: descriptionBox,
  }
  inject(document.body,
    <DetailEntry
     {...props}
    />
  )


  // inject(descriptionBox,
  //   <GalleryEntry
  //     name={serieTitle}
  //     href={window.location.href}
  //     image={image}
  //     className={styles.serieMenu} 
  //     setTitle={(data)=>setTitleData(data)}
  //   />
  // )
  

  
  // episodes.forEach((ele: HTMLElement) => {
    
  //   ele.style.position = "relative";
  //   hide(ele.querySelector('.Stts') as any)


  //   inject(ele,
  //     <DetailEntry/>
  //   )

  // })

  // return <></>
}
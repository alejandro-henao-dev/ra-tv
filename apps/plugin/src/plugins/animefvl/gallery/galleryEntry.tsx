import React, { useEffect, useState } from "react";
import { Api } from "../../../core/api";
import { FloatingMenu } from "../../../core/components/floatingMenu";
import { Title } from "../../../core/types";

import styles from "./index.scss"


export type Props = {
  name:string,
  href: string,
  image?: string,
  setTitle?:(serie: Title) => any
  className?:string
}
export const GalleryEntry:React.FC<Props> = ({name,href,image,className,setTitle}) => {
  const api = Api()
  
  const [titleData, setTitleData] = useState(null as any)

  
  const bubbleData = (data) => {
    if (typeof setTitle == 'function') {
      setTitle(data)
    }
  }

  useEffect( () => {
    (async () => {
      setTitleData(await api.getTitle(href))
    })()
  }, [])

  useEffect(() => {
    bubbleData(titleData)
  },[titleData])
  

  if (!titleData) {
    return
  }

  let floatingMenuProps = {
    viewed:titleData.viewed,
    saved: titleData.saved,
    playHref: "null",
    onView: () => {

    },
    onSave: async () => {
      
      if (titleData.saved) {
        const success = await api.removeTitle(titleData.id)
        if (!success) {
          return
        }
        setTitleData({
          ...titleData,
          id:null,
          saved:false
        })
      } else {
        const success = await api.saveTitle(href, name, image)  
        if (!success) {
          return
        }
        setTitleData({
          ...titleData,
          id:success.id,
          saved:true
        })
      }
    }
  }
  
  return < >
    
    {/* render floating menu on gallery entry */}
    <FloatingMenu className={`${styles.coverMenu} ${className ?? ''}`}
      {...floatingMenuProps}
    />
  </>
}

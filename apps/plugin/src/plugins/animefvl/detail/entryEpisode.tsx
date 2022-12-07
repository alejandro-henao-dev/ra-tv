import React, { useEffect, useState } from "react";
import { Api } from "../../../core/api";
import { FloatingMenu } from "../../../core/components/floatingMenu";
import { getAbsUrl } from "../../../core/lib/getAbsUrl";
import { hide } from "../../../core/lib/hide";
import { show } from "../../../core/lib/show";
import { Title, TitleEpisode } from "../../../core/types";
import  styles  from "./index.scss";


export type Props = {
  title?: Title,
  element?: HTMLElement
  
}
export const EntryEpisode: React.FC<Props> = ({
  title,
  element,
}) => {
  const api = Api()
  const [episodeData,setEpisodeData]=useState(null)
  
  useEffect(() => {
    if (!title?.id) {
      show(element.querySelector('.Stts'))
      return
    }

    element.style.position = "relative";

    (async () => {
      hide(element.querySelector('.opivw'),{removeChild:true})
      const href = getAbsUrl(element.querySelector("a").getAttribute("href"))
      const number= element.querySelector("p").textContent.replace('Episodio ',"")
      const existingData:TitleEpisode = await api.getEpisode(href)
      
      if (!existingData.id) {
        const data=await api.saveEpisode(href,number,title.id)
        setEpisodeData(data)
      } else {
        setEpisodeData(existingData)
      }
    })()
  },[title])
  


  let floatingMenuProps = {
    viewed:episodeData?.viewed,
    playHref: null,
    vertical: true,
    onView: async () => { 
      const viewed = await api.setViewedEpisode(episodeData.id, !episodeData.viewed)
      setEpisodeData({
        ...episodeData,
        viewed
      })
      
    }
  }
  
  return title?.id && < >
    <FloatingMenu className={styles.episodeEntry}
      {...floatingMenuProps}
    />
  </>
}

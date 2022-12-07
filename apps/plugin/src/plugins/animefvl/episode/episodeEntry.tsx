import React, { useEffect, useState } from "react";
import { Api } from "../../../core/api";
import { FloatingMenu } from "../../../core/components/floatingMenu";

import styles from "./index.scss";


export type Props = {
  titleHref: string,
  href:string
}

export const EpisodeEntry:React.FC<Props> = (props) => {
  const api = Api()

  const [episodeData, setEpisodeData] = useState(null as any)
  
  
  useEffect( () => {
    (async () => {
      setEpisodeData(await api.getEpisode(props.href))
    })()
  }, [])
  
  let floatingMenuProps = {
    viewed:episodeData?.viewed,
    playHref: null,
    
    onView: async () => {
      const viewed = await api.setViewedEpisode(episodeData?.id, !episodeData.viewed)
      setEpisodeData(data => ({
        ...data,
        viewed
      }))
    }
  }
  
  return episodeData && < >
    <FloatingMenu className={styles.episodeEntry}
      {...floatingMenuProps}
    />
  </>
}
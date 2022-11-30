import { useEffect, useState } from "react";
import { Api } from "../../../core/api";
import { FloatingMenu } from "../../../core/components/floatingMenu";

import styles from "./index.scss";

export const EpisodeEntry = (props) => {
  const api = Api()
  
  const [titleData, setTitleData] = useState(null as any)

  
  useEffect( () => {
    (async () => {
      setTitleData(await api.getTitle(props.href))
    })()
  }, [])
  

  // if (!titleData) {
  //   return
  // }

  let floatingMenuProps = {
    viewed:titleData?.viewed,
    saved: titleData?.saved,
    playHref: null,
    
    onView: () => { }
  }
  
  return < >
    
    {/* render floating menu on gallery entry */}
    <FloatingMenu className={styles.episodeEntry}
      {...floatingMenuProps}
    />
  </>
}
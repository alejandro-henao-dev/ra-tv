import { useEffect, useState } from "react";
import { Api } from "../../../core/api";
import { FloatingMenu } from "../../../core/components/floatingMenu";
import  styles  from "./index.scss";

export const DetailEntry = (props) => {
  const api = Api()
  
  const [titleData, setTitleData] = useState(null as any)

  
  useEffect( () => {
    (async () => {
      setTitleData(await api.getTitle(props.href))
    })()
  }, [])
  

  if (!titleData) {
    return
  }

  let floatingMenuProps = {
    viewed:titleData.viewed,
    saved: titleData.saved,
    playHref: null,
    vertical: true,
    onView: () => { }
  }
  
  return < >
    <FloatingMenu className={styles.episodeEntry}
      {...floatingMenuProps}
    />
  </>
}

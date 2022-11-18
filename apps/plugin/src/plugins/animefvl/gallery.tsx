import { title } from "process";
import { useEffect, useState } from "react";
import { Api } from "../../core/api";
import { FloatingMenu } from "../../core/components/floatingMenu";
import { getAbsUrl } from "../../core/lib/getAbsUrl";
import { inject } from "../../core/lib/inject";
import { CoreProps } from "../../core/types";
import styles from "./gallery.scss"

const GalleryEntry = (props) => {
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
    playHref:null,
  }
  
  return < >
    
    {/* render floating menu on gallery entry */}
    <FloatingMenu className={styles.coverMenu}
      {...floatingMenuProps}
    />
  </>
}


export const gallery = (core:CoreProps) => {
  const cardSelector = "ul.ListAnimes li"


  Array.from(document.querySelectorAll('ul.ListAnimes li'))
    .forEach((ele:HTMLElement) => {
      ele.style.position = "relative"
      const name = ele.querySelector(".Title").textContent
      const link = ele.querySelector("a").getAttribute('href')
      const href = getAbsUrl(link)

      const title = {
        name,
        href
      }
      
      inject(ele,
        <GalleryEntry {...title} />
      )
    })
 
}
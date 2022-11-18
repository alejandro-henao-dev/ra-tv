import { FloatingMenu } from "../../core/components/floatingMenu";
import { getAbsUrl } from "../../core/lib/getAbsUrl";
import { inject } from "../../core/lib/inject";
import { CoreProps } from "../../core/types";
import styles from "./gallery.scss"

const GalleryEntry = (props) => {
  return < >
    
    {/* get the entry data */}

    {/* render floating menu on gallery entry */}
    <FloatingMenu className={styles.coverMenu}/>
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
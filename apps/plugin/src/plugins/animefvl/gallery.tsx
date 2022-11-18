import { FloatingMenu } from "../../core/components/floatingMenu";
import { inject } from "../../core/lib/inject";
import { CoreProps } from "../../core/types";
import styles from "./gallery.scss"

const GalleryMenu = () => {
  return < >
    <FloatingMenu className={styles.coverMenu}/>
  </>
}


export const gallery = (core:CoreProps) => {
  const cardSelector = "ul.ListAnimes li"


  Array.from(document.querySelectorAll('ul.ListAnimes li'))
    .forEach((ele:HTMLElement) => {
      ele.style.position = "relative"
      inject(ele,
        <GalleryMenu />
      )
    })
 
}
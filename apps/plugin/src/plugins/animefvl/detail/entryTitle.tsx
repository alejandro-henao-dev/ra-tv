import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react"
import { imageToBase64 } from "../../../core/lib/imageToBase64"
import { Title } from "../../../core/types"
import { addWrapper } from "../../../core/utils/addWrapper"
import { GalleryEntry } from "../gallery/galleryEntry"
import styles from "./index.scss"
import { selectElement } from "../../../core/utils/selectElement";


export type Props = {
  setTitleData?: (title: Title) => any,
  titleName: string,
  titleImage: string,
  titleMenuContainer:Element
}
export const EntryTitle: React.FC<Props> = ({
  setTitleData,
  titleName,
  titleImage,
  titleMenuContainer
}) => {
  
  const dependencies = [titleName, titleImage, titleMenuContainer]
  const missingDependencies= dependencies.some(d => d == null)
  if (missingDependencies) {
    return 
  }

  return ReactDOM.createPortal(
    <GalleryEntry
      name={titleName}
      href={window.location.href}
      image={titleImage}
      className={styles.serieMenu} 
      setTitle={setTitleData}
    />,
    titleMenuContainer
  );
}
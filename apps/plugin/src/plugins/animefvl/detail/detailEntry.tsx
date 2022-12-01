import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Title } from "../../../core/types";
import { EntryEpisode } from "./entryEpisode";
import { EntryTitle } from "./entryTitle";

import {Props as entryTitleProps} from './entryTitle'
import {Props as EntryEpisodeProps} from "./entryEpisode"
export interface Props extends entryTitleProps, EntryEpisodeProps {
  episodes: {
    wrapper: Element,
    originalElement:Element
  }[] 
}

export const DetailEntry:React.FC<Props> = (props) => {
 
  const [titleData, setTitleData]=useState(null)

  const titleProps = {
    titleName: props.titleName,
    titleImage: props.titleImage,
    titleMenuContainer: props.titleMenuContainer
  }

  const episodesRender=props.episodes.map(episode => {
    const episodeProps = {
      title: titleData,
      element: episode.originalElement as HTMLElement,
    }
    return ReactDOM.createPortal(
      <EntryEpisode
        {...episodeProps}
      />,
      episode.wrapper
    )
  })

  return <>
    <EntryTitle
      setTitleData={(data) => setTitleData(data)}
      {...titleProps}
    />

    {episodesRender}
  </>
}

import { OnCoverBtn } from "./components/onCoverButton"
import ReactDOM from "react-dom";
export interface CoreProps{
  injectCoverGalleryButtons: typeof injectCoverGalleryButtons
  custom:Object
}

export type Core = (plugin: Plugin) => Core
export type Plugin = (props: CoreProps) => Core

const injectCoverGalleryButtons = (target:HTMLElement) => {
  const wrapper=document.createElement("div")
  target.append(wrapper)
  ReactDOM.render(<OnCoverBtn />, wrapper);
}

const customData = {}

export const core:Core = (plugin:Plugin) => {
  return plugin({
    injectCoverGalleryButtons,
    custom:customData
  })
}
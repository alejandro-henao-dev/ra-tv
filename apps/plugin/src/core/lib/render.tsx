import React from "react";
import {createRoot} from "react-dom/client";


export const render = (
  target: HTMLElement,
  component,
  options: {
    classNames?:string[]
  }={}
) => {
  const wrapper = document.createElement("div")
  
  wrapper.classList.add("ra-tv__container")

  options?.classNames?.forEach(className => {
    wrapper.classList.add(className)
  })

  
  target.append(wrapper)
  const root=createRoot(wrapper);
  root.render(component);
}
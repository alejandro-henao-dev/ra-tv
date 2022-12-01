import React from "react";
import {createRoot} from "react-dom/client";
import { addWrapper } from "../utils/addWrapper";


export const render = (
  target: HTMLElement | Element,
  component,
  options: {
    classNames?:string[]
  }={}
) => {
  const wrapper= addWrapper(target,{classNames:options.classNames})
  
  const root=createRoot(wrapper);
  root.render(component);
}
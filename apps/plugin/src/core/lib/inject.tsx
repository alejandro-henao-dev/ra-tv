import ReactDOM from "react-dom";
import { elementHandler } from "../utils/elementHandler";
import { render } from "./render";

export const inject = (
  target: string | HTMLElement,
  component: React.ReactElement,
  options: {
    multi?: boolean
  }={}
) => {
  elementHandler(
    target,
    (ele) => { 
      render(ele, component)
    },
    options
  )
}

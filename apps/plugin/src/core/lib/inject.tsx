import ReactDOM from "react-dom";
import { render } from "./render";

export const inject = (
  target: string | HTMLElement,
  component: React.ReactElement,
  options: {
    multi: boolean
  }
) => {
  const selectionMethod = {
    single: 'querySelector',
    all: "querySelectorAll"
  }[options.multi ? 'all' : 'single']
  
  const targetElement = typeof target == "string"
    ? document[selectionMethod](target)
    : target
  
  if (options.multi) {
    (Array.from(targetElement) as HTMLElement[])
      .forEach(ele => render(ele, component))
  } else {
    render(targetElement, component)
  }
}

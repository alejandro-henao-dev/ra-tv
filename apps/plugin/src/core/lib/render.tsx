import ReactDOM from "react-dom";


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
  ReactDOM.render(component, wrapper);
}
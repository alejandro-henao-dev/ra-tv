export const addWrapper = (
  target: HTMLElement | Element,
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
  return wrapper
  
}
export const elementHandler = (
  target: string | HTMLElement,
  callback:(element:HTMLElement)=>void,
  options: {
    multi?: boolean
  }={}
) => {

  if (!target) {
    return
  }

  const selectionMethod = {
    single: 'querySelector',
    all: "querySelectorAll"
  }[options.multi ? 'all' : 'single']
  
  const targetElement = typeof target == "string"
    ? document[selectionMethod](target)
    : target
  
  if (options.multi) {
    (Array.from(targetElement) as HTMLElement[])
      .forEach(ele => callback(ele))
  } else {
    callback(targetElement)
  }
}

export const selectElement = (
  target: string | Element,
  multi?: boolean
) => {

  if (!target) {
    return
  }

  const selectionMethod = {
    single: 'querySelector',
    all: "querySelectorAll"
  }[multi ? 'all' : 'single']
  
  const targetElement = typeof target == "string"
    ? document[selectionMethod](target)
    : target
  
  return targetElement
}

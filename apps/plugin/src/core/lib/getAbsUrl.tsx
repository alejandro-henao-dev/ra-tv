export const getAbsUrl = (url: string) => {
  const host = window.location.host
  const protocol = window.location.protocol
  
  if (url.includes(host) && url.includes(protocol)) {
    return url
  }

  if (url.match(/^\/.*/)) {
    return `${protocol}//${host}${url}`
  }
  return `${protocol}//${host}/${url}`
}
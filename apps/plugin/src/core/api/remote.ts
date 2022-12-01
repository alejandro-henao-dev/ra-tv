import { TitleModel } from "../models/title"
import { API, Title, TitleEpisode, TitleSeason } from "../types"

const base = new URL("http://localhost:3030/api/v1/")

export const remoteApi: API = {
  getTitle: async (href: string) => {
    const url = new URL("serie", base)
    url.searchParams.append("link", href)
    url.searchParams.append("$limit", "1")
    
    const res = await fetch(url)
    const {data}=await res.json()
    return TitleModel(data?.at(0))
  },

  setViewedTitle: (href: string, viewed: boolean) => {
    return true
  },

  saveTitle: async (href: string, name: string, image:string) => {
    const body=JSON.stringify({
      link: href,
      title: name,
      image
    })
   
    const url = new URL("serie", base)
    const res = await fetch(url, {
      method: "post",
      body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })

    const data= await res.json()
    return TitleModel(data)

  },

  removeTitle: async (id:string) => {
    const url = new URL("serie/"+id, base)
    
    const res = await fetch(url, {
      method: "delete",
    })
    const data=await res.json()
    return (data.id == id)
  },
  
  getSeason: (href: string) => {
    return {} as TitleSeason
  },

  setViewedSeason: (href: string, viewed: boolean, titleHref?: (string) => boolean) => {
    return true
  },
  
  getEpisode: (href: string) => {
    return { } as TitleEpisode
  },

  setViewedEpisode: (href: string, viewed: boolean, titleHref?: string) => {
    return true
  },

  getNextEpisode: (titlehref: string) => {
    return { } as TitleEpisode
  }
}
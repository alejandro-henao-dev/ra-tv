import { API, Title, TitleEpisode, TitleSeason } from "../types"

export const localApi: API = {
  getTitle:(href:string) => {
    
    return {} as Title
  },

  setViewedTitle: (href: string, viewed: boolean) => {
    return true
  },

  saveTitle: (href: string, name: string) => {
    return true
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

  getNextEpisode: (titlehref: string) => {
    return { } as TitleEpisode
  },

  setViewedEpisode: (href: string, viewed: boolean, titleHref?: string) => {
    return true
  },
}
import { inject } from "./lib/inject"

export interface CoreProps{
  next:()=>void,
  setState:(state:Object)=>void
}
export type CoreConfig = {
  api?:"remote" | "local"
}

export type Plugin = (props: CoreProps) => any

export type Title = {
  name: string,
  href: string,
  viewed?: boolean,
  saved?: boolean,
}

export type TitleSeason = {
  ownerHref: string,
  seasonNumber: number,
  href: number,
  viewed?: boolean,
  episodes: TitleEpisode
}

export type TitleEpisode = {
  ownerHref?: string,
  seasonHref?: string,
  href: string,
  episode: number,
  viewed?: boolean

}

export type API = {
  getTitle: (href: string) => Title,
  setViewedTitle: (href: string, viewed: boolean) => boolean,
  saveTitle: (href: string, name: string) => boolean
  
  getSeason: (href: string) => TitleSeason,
  setViewedSeason: (href: string, viewed: boolean, titleHref?:(string) => boolean ) => boolean,
  
  getEpisode: (href: string) => TitleEpisode,
  setViewedEpisode: (href: string, viewed: boolean, titleHref?: string) => boolean,
  getNextEpisode:(titlehref:string)=>TitleEpisode
  
}
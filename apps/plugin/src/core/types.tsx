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
  id:number,
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
  id?:number
  titleId?: string,
  seasonHref?: string,
  href: string,
  episode: number,
  viewed?: boolean

}

export type API = {
  getTitle: (href: string) => Promise<Title>,
  setViewedTitle: (href: string, viewed: boolean) => boolean,
  saveTitle: (href: string, name: string, image:string) => Promise<Title>
  removeTitle: (href: string) => Promise<boolean>
  saveTitleImage:  (id: string, image: string) => Promise<any>
  
  getSeason: (href: string) => TitleSeason,
  setViewedSeason: (href: string, viewed: boolean, titleHref?:(string) => boolean ) => boolean,
  
  getEpisode: (href: string) => Promise<TitleEpisode>,
  saveEpisode: (href: string, number:string,titleId: number)=>Promise<TitleEpisode>
  setViewedEpisode: (id: string, viewed: boolean) => Promise<boolean>,
  getNextEpisode:(titlehref:string)=>TitleEpisode
  
}
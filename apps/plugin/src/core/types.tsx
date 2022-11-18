import { inject } from "./lib/inject"

export interface CoreProps{
  next:()=>void,
  setState:(state:Object)=>void
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
  viewed?: boolean
}

export type TitleEpisode = {
  ownerHref: string,
  href: string,
  season?: TitleSeason,
  episode: number,
  viewed?: boolean

}
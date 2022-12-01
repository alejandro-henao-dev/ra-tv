import { TitleEpisode } from "../types"

export const EpisodeModel = (data:any):TitleEpisode => {
  return {
    id: data?.id,
    episode: data?.number,
    href: data?.number,
    titleId: data?.serieId,
    viewed: data?.watched
  }  
}

import { Application } from '../declarations'
import chapterService from './chapter.service'
import  seriesService  from './series.service'
import tagService from './tag.service'
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.use('series', seriesService)
  app.use('chapter', chapterService)
  app.use('tag', tagService)
}

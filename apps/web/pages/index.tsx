import { CardGallery } from "../components/molecules/CardGallery";
import { Pagination } from "../components/molecules/Pagination";


const dummy = {
  title: "Title",
  badges: ['anime flv'],
  coverImg: '/img/dummy.jpg',
  meta: {
    link:"/detail"
  }
}
const dummyGal=new Array(12).fill(dummy)
export default function Home() {
  return (
    <div >
      <CardGallery cards={dummyGal} />
      <Pagination pages={10} current={1} />
    </div>
  )
}

import { CardGallery } from "../components/molecules/CardGallery";
import { Pagination } from "../components/molecules/Pagination";
import { api } from "../api";
import { useEffect, useState } from "react";


export default function Home() {

  const [entries, setEntries] = useState([])
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    setPagination({
      totalPages: 0,
      current:1
    })
  },[])

  useEffect(() => {
    const getEntryes = async () =>{
      const data = await api().service("serie").find({ query: { '$limit': 50, '$skip': 50 * (pagination?.current -1) } })
      console.log(data)
      setEntries(data.data.map(d => {
        return {
          title: d.title,
          badges: ['anime flv'],
          coverImg: `data:image;base64,${d.image}`,
          meta: {
            link:d.link
          }  
        }
      }))
    }
    
    if (pagination) {
      getEntryes()  
    }
    
  }, [pagination])
  

  useEffect(() => {
    console.log(entries)
  },[entries])
  const dummy = {
    title: "Title",
    badges: ['anime flv'],
    coverImg: '/img/dummy.jpg',
    meta: {
      link:"/detail"
    }
  }
  const onPagination = (event: React.ChangeEvent<unknown>, value: number) => {

    setPagination(p => {
      return {
        ...p,
        current:value
      
      }
    })
  };


  return (
    <div >
      <CardGallery cards={entries} />
      {pagination?.totalPages > 1 && <Pagination pages={pagination.totalPages} current={pagination.current} onChange={onPagination} />}
    </div>
  )
}

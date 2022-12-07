import { Grid } from "@mui/material";
import Link from "next/link";
import { Card, Props as CardPropsOriginal } from "../Card";
 

export interface CardProps extends CardPropsOriginal{
  meta: {
    link:string
  }
  children:any
  
}
type Props = {
  cards: CardProps[]
}

const CardLink: React.FC<any> = ({ meta, children }) => {
  return <Link href={meta.link}  >
    <a style={{textDecoration:"none"}} target="_blank">
      {children}
    </a>
  </Link>
}
export const CardGallery: React.FC<Props> = ({cards}) => {

  
  return <Grid container spacing={2} component="section">
    {cards.map((card, i) => {
      const Wrapper = card.meta.link ? CardLink : null 
      
      return <Grid key={ card.title } item xs={6} sm={6} md={4} lg={2}>
         <Card {...card} Wrapper={Wrapper}/>
      </Grid>
    })}
  </Grid>
}
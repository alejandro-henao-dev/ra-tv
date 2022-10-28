import { Box, Card as CardCore, CardContent, CardMedia, Typography } from "@mui/material"
import { Fragment, ReactNode } from "react"
import { Chip } from "../../atoms/Chip"

export type Props = {
  title: string,
  badges: string[],
  coverImg: string,
  Wrapper?: React.FC<any>
  meta?:Object
}

export const Card: React.FC<Props> = (props) => {
  
  const Wrapper = props.Wrapper ?? Fragment
  return <Wrapper {...props}>
    <CardCore component="article" variant="outlined">
      <CardMedia
        component="img"
        height="auto"
        image={ props.coverImg }
        alt={props.title}
      />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.badges.map(badge => 
            <Chip label={badge} key={ badge } />
          )}
        </Typography>
      </CardContent>

  </CardCore>
  </Wrapper>
}
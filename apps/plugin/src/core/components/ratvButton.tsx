import { FC } from "react";
import IconButton from '@mui/material/IconButton';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Fab, Paper } from "@mui/material";

export type props = {
  onClick:()=>void
}

export const RatvButton:FC<props> = ({onClick}) => {
  return <div onClick={onClick}>
    <Fab size="small" color="default">    
      <WidgetsIcon/>
    </Fab>
  </div>
}
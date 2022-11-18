import { ButtonGroup, IconButton } from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { FC } from "react";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

export type Props = {
  onActionClick?: () => void,
  className?:string
}
export const Actions: FC<Props> = ({ onActionClick = () => { },className}) => {
  return <>
    <IconButton
      onClick={() => {
        onActionClick()
      }}
    >
      <BookmarkBorderIcon/>
    </IconButton>

    {/* <IconButton size="small"> */}
      <VisibilityOutlinedIcon />
    {/* </IconButton> */}

    <IconButton size="small">
      <PlayCircleFilledWhiteOutlinedIcon />
    </IconButton>

  </>
}
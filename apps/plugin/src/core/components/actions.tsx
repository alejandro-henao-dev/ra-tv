import { ButtonGroup, IconButton } from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { FC } from "react";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

export type Props = {
  className?: string,
  viewed?: boolean,
  saved?: boolean,
  onPlay?: ()=>void,
  onSave?: ()=>void,
  onView?: ()=>void
}
export const Actions: FC<Props> = ({
  className,
  saved,
  viewed,
  onPlay,
  onSave,
  onView
}) => {
  
  return <>
   {onSave && <IconButton
      onClick={() => {
        onSave()
      }}
    >
      {saved 
        ? <BookmarksIcon />
        :<BookmarkBorderIcon/>
      }
    </IconButton>}

    {onView && <IconButton size="small"
      onClick={() => {
        onView()
      }}
    >
      {viewed
        ? <VisibilityIcon/>
        : < VisibilityOutlinedIcon />
      }
    </IconButton>}

    {onPlay && <IconButton size="small"
      onClick={() => {
        onPlay()
      }}
    >
      <PlayCircleFilledWhiteOutlinedIcon />
    </IconButton>}

  </>
}
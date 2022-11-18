import { RatvButton } from "./ratvButton"
import styles from "./floatingMenu.scss"
import { Box } from "@mui/system"

import { useEffect, useRef, useState } from "react"
import { Actions } from "./actions"
import { ButtonGroup, Typography } from "@mui/material"
import { classes } from "../utils/classes"

export type Props = {
  className:string
}
export const FloatingMenu:React.FC<Props> = ({className}) => {

  const [open, setOpen] = useState(true)
  const ref:React.RefObject<HTMLElement>=useRef()
  const toggle = () => setOpen((_open) => !_open)

  const onMenuBtnClick = () => {
    // setOpen(false) 
  }
  
  // useEffect(() => {
  //   const onBodyClick = ({ target }) => {
  //     if (!ref.current.contains(target)) {
  //       setOpen(false)  
  //     }
  //   }
  //   document.body.addEventListener('click', onBodyClick)
  //   return ()=>document.body.removeEventListener('click', onBodyClick)
  // })

  return <Box className={classes(styles.floatingMenuContainer, className)} ref={ref}>

    {/* <RatvButton onClick={toggle} /> */}
    
    {open && <ButtonGroup variant="contained" className={styles.menu}>
      <Actions onActionClick={onMenuBtnClick} />
      <Typography>

      </Typography>
    </ButtonGroup> }
  </Box>
}
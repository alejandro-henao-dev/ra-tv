import { RatvButton } from "./ratvButton"
import styles from "./floatingMenu.scss"
import { Box } from "@mui/system"
import { Actions } from "./actions"
import { ButtonGroup, Typography } from "@mui/material"
import { classes } from "../utils/classes"

export type Props = {
  className?: string,
  viewed: boolean,
  saved: boolean,
  playHref?: string,
}
export const FloatingMenu:React.FC<Props> = ({className}) => {

  return <Box className={classes(styles.floatingMenuContainer, className)} >
    
    {open && <ButtonGroup variant="contained" className={styles.menu}>
      <Actions />
      <Typography>

      </Typography>
    </ButtonGroup> }
  </Box>
}
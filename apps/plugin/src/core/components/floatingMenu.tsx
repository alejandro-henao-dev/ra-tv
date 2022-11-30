import { RatvButton } from "./ratvButton"
import styles from "./floatingMenu.scss"
import { Box } from "@mui/system"
import { Actions, Props as actionProps } from "./actions"
import { ButtonGroup, Typography } from "@mui/material"
import { classes } from "../utils/classes"

export interface Props extends actionProps {
  className?: string,
  playHref?: string,
  vertical?: boolean,
}

export const FloatingMenu: React.FC<Props> = ({
  className,
  vertical,
  playHref,
  ...actionProps
}) => {

  if (playHref) {
    actionProps.onPlay=()=>{}
  }

  return <Box className={classes(styles.floatingMenuContainer, className)} >
    
    <ButtonGroup variant="contained"
      className={classes(...[
        styles.menu,
        vertical && styles.vertical
      ])}
    >
      <Actions {...actionProps} />
    </ButtonGroup> 
  </Box>
}
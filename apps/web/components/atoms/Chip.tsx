import { Chip as ChipCore, ChipTypeMap,  } from "@mui/material"



interface Props{
  label:string,
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning",
  size?: "small" | "medium"
}
export const Chip: React.FC<Props> = (props) => {
  return <ChipCore
    variant="outlined"
    label={props.label }
    color={props.color}
    size={props.size}
  />
}
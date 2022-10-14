import { Typography } from "@mui/material"
import pkg from "../../../package.json";

export const PageFooter:React.FC=()=>{
  return <footer className="pageFooter">
    <Typography  variant="subtitle2"   align="center">
    RAT-TV /  V {pkg.version}
    </Typography >
  </footer>
}
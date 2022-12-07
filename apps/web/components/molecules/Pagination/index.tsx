import { Box, Pagination as PaginationCore, PaginationProps } from "@mui/material";

{/* <Pagination count={10} variant="outlined" color="primary" /> */ }

export type Props = {
  pages: number,
  current:number
  onChange:(event: React.ChangeEvent<unknown>, value: number)=>void
}
export const Pagination: React.FC<Props> = props => {
  return <Box component={'section'}
    sx={{
      m: "2rem auto",
      display: 'flex',
      justifyContent:"center"
    }}
  >
    <PaginationCore
      count={props.pages}
      page={props.current}
      size={'small'}
      onChange={props.onChange}
    />
  </Box>
}
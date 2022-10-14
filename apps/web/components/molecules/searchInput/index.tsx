import { Autocomplete, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  autocomplete?:boolean
}
export const SearchInput: React.FC<Props> = ({
  autocomplete
}) => {

  if (autocomplete) {
    return <Autocomplete
      
      id="combo-box-demo"
      options={["1","2"]}
      renderInput={ Input }
    />
  }
  return <Input/>
 
}

const Input = (props) => {
  return <TextField
    {...props} 
    InputProps={{
      ...props.InputProps,
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon/>
        </InputAdornment>
      ),
    }}
    variant="standard"
    placeholder="Buscar"
    size="small"
  />
}
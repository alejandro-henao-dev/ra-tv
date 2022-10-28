import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { Chip } from "../components/atoms/Chip";
import { Image } from "../components/atoms/Image";

export default function Detail() {

  const [value, setValue] = React.useState(0);

  return (<>
    <Box
      display="flex"
      component="header"
      sx={{
        gap:'1rem'
      }}
    >

      <Box>
        <Image alt="title"/>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: "column",
          gap: '1rem',
          marginLeft:'3rem'
          
        }}
      >
        <Typography variant="h5">Renai Flops</Typography>
        
        <Box   sx={{
            display: 'flex',
            flexDirection: "column",
            gap: '0rem',
            
          }}
        >
          <Typography variant="body1">Temporada: 1 / 2 </Typography>
          <Typography variant="body1">Capitulos: 3 / 10 </Typography>
          
        </Box>

        <Box sx={{display:'flex', gap:'.5rem'}}>
          <Chip label="anime" />
          <Chip label="visto"/>
        </Box>
      </Box>
    </Box>

    <Box sx={{mt:'2rem'}}>
      <Tabs value={value} >
        <Tab label="Capitulos" />
        <Tab label="Temporadas" />
      </Tabs>

      <p>List Here</p>
    </Box>
    </>
  )
}

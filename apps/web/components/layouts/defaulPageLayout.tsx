import { PageSidebar } from "../organisms/pageSidebar"
import { PageHeader } from "../organisms/pageHeader"
import { PageFooter } from "../organisms/pageFooter"
import { Box } from "@mui/material";

type props = {
  children?: React.ReactNode;
}

export const DefaultPageLayout: React.FC<props> = ({
  children
}) => {
  return <Box display="flex" flexGrow="1">
    <PageSidebar />
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: "max-content 1fr max-content",
        height: 'calc(100vh - 4rem)',
        width: '100%',
        gridTemplateColumns: "1fr",
        padding: "1rem",
        pt: "3rem",
        gap:"2.5rem",
      }}
    >
     <Box
        sx={{
          pl:"2rem"
        }}
      >
        <PageHeader />
      </Box>
      <Box
        component="main"
        flexDirection="column"
        flexGrow="1"
        sx={{
          pl:"2rem"
        }}
        
      >
        {children}
      </Box>

      
    </Box>
  </Box>
}
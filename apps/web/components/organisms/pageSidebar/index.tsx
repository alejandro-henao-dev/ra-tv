import { Toolbar, Typography, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';

import { SIDEBAR_CATEGORIES, SIDEBAR_MENU } from './_constants/menu';
import { Image } from '../../atoms/Image';
import { SearchInput } from '../../molecules/searchInput';
import { PageFooter } from '../pageFooter';

const drawerWidth = '250px';

export const PageSidebar: React.FC = () => {


  const menuItems = SIDEBAR_MENU.map(item =>
    <ListItem key={item.text} dense>
      <ListItemButton>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText>
          <Typography>
            {item.text}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )

  const tagMenu = SIDEBAR_CATEGORIES.map(item =>
    <ListItem key={item.text} dense>
      <ListItemButton>
        <ListItemText>
          <Typography>
            {item.text}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )

  return <aside>
    <Toolbar
      disableGutters
    >
      <Drawer
        variant='permanent'
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          "& .pageFooter":{
            marginTop:'auto'
          }
        }}
      >
        <List>
 
          <ListItem>
            <ListItemText>
              <Image alt="logo"
                variant="circular"
                width={100}
                height={100}
                sx={{
                  margin: '1rem auto',
                }}
              />
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Divider />
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <SearchInput autocomplete={true} />
            </ListItemText>
          </ListItem>

          {menuItems}

          <ListItem>
            <ListItemText>
              <Divider />
            </ListItemText>
          </ListItem>

          <ListItem dense>
            <ListItemText>
              <Typography variant="subtitle2">
                Categorias
              </Typography>
            </ListItemText>
          </ListItem>

          {tagMenu}

        </List>

        <PageFooter/>
      </Drawer>
    </Toolbar>
  </aside>
}
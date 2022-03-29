import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { Context } from '../context';
import { useRouter } from 'next/router';
import { CollectionIcon, HomeIcon, HeartIcon, CogIcon } from '@heroicons/react/solid';

const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const navigations =  [{name:'Home',icon:HomeIcon}, {name:'Blibliotheque',icon:CollectionIcon}, {name:'Favoris',icon:HeartIcon},{name:'Settings',icon:CogIcon} ];
export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {state, dispatch} = React.useContext(Context);
  const router = useRouter();
  
  React.useEffect(() => {
    if(localStorage.user){
      dispatch({type:"LOGGED_IN_USER", payload : localStorage.user});
      router.push('home')
    }else{
      if(!state.logged){
         router.push('/');
      }
    }
  
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {state.logged && 
      <>
      <AppBar
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
       <Drawer variant="permanent" anchor="left"  sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            NextMusic
          </Typography>
         </Toolbar>
       <List>
       {navigations.map((item, index) => (
            // eslint-disable-next-line @next/next/link-passhref
            <Link href={item.name.toLowerCase()} key={index}>
              <ListItem button>
                <ListItemIcon>
                  <item.icon className='h-6 w-6 '/>
                </ListItemIcon>
                <ListItemText  primary={item.name}/>
              </ListItem>
            </Link>
          ))}
       </List>
     </Drawer>
      </>
      
     }
     
      <Box component="main" sx={{ flexGrow: 1, p: state.logged ? 3 : 0 }}>
        <div className='ml-28 mt-16'>{props.children}</div>
          
      </Box>
    </Box>
  );
}
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React, {useState, useCallback } from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { Context } from '../context';
import { useRouter } from 'next/router';
import { CollectionIcon, HomeIcon, HeartIcon, CogIcon, UserCircleIcon } from '@heroicons/react/solid';
import lightTheme from '../styles/theme/lightTheme';
import darkTheme from '../styles/theme/darkTheme';
import { ThemeProvider, CssBaseline } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import CardSearch from './cardSearch';
import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import BottomPlayer from './player/bottomPlayer';
import debounce from '../utility/debounce';
import MenuUser from './menuUser/MenuUser';
import UseIsLogged from '../custom-hook/IsLogged';

const drawerWidth = 250;


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'var(--theme-podcast-player)',
  borderRadius:"90px",
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		'X-RapidAPI-Key': '8d62796f53msh915f625fd3e5709p1bbdc7jsnfed37800d073'
	}
};
const navigations =  [{name:'Home',icon:HomeIcon}, {name:'Bibliotheque',icon:CollectionIcon}, {name:'Favoris',icon:HeartIcon} ];
export default function MiniDrawer(props) {
  const {state, dispatch} = React.useContext(Context);
  const router = useRouter();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const logged = UseIsLogged();
  const active = router.asPath.replace('/','');
  
  const spotifyAPI = (text) =>{
    setOpenSearch(true)
    setData(null);
    setLoading(true)
    getMusicAPI(text)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMusicAPI = useCallback(
    debounce (async (text) => {
      try{
        const response = await fetch('https://spotify23.p.rapidapi.com/search/?q='+text+'&type=tracks&offset=0&limit=30&numberOfTopResults=5', options)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData.tracks.items);
        setError(null);
      }
      catch(e){
        setError(e)
        setData(null)
      }
      setLoading(false)
    }, 500)
  ,[]);

  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === "Escape") {
        setOpenSearch(false)
      }
    });
    window.addEventListener("click", (event) => {
      if(event.target.id!="search"){
        setOpenSearch(false)
      }
    });
    if(localStorage.darkMode=="true")
      document.getElementsByTagName('body')[0].classList.add('dark')
    else 
      document.getElementsByTagName('body')[0].classList.remove('dark')
    dispatch({type:"CHANGE_DARK", payload:localStorage.darkMode=="true"?true:false})

    if(localStorage.user){
      dispatch({type:"LOGGED_IN_USER", payload : JSON.parse(localStorage.user)});

    }else{
      if(!state.logged){
         router.push('/');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={state.darkMode?darkTheme:lightTheme}>
      <CssBaseline />
      {state.logged && 
      <>
      <AppBar
      style={{backgroundColor:"transparent", boxShadow:"unset", backgroundImage:"unset"}}
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <div className='relative' >
        <Search style={{marginLeft:0}} options={data} onChange={(res)=>res.target.value.length<3||spotifyAPI(res.target.value)} error={error}>
          <SearchIconWrapper>
            <SearchIcon style={{color:"var(--placeholder-color)"}} />
          </SearchIconWrapper>
          <StyledInputBase
            id="search"
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        {openSearch && <CardSearch data={data} loading={loading}/>}
        </div>
        <Box sx={{ flexGrow: 1 }} />
            <MenuUser />
      </Toolbar>
    </AppBar>
       <Drawer variant="permanent" anchor="left"  sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',border:"unset", padding:"0px 10px"},
        }}>
        
        <Toolbar>
        <Link href={"home"}>
          <Typography variant="h6" noWrap component="div">
            NextMusic
          </Typography>
          </Link>
         </Toolbar>
         
       <List className='space-y-1'>
       {navigations.map((item, index) => (
            <Link href={item.name.toLowerCase()} key={index}>
              <ListItem className={`${active === item.name.toLowerCase() ? 'active' : ''}`} button>
                <ListItemIcon>
                  <item.icon className='h-6 w-6'/>
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
        <div className={state.logged ? 'ml-18 mt-16' : ''}>{props.children}</div> 
      </Box>
      {state.logged && <BottomPlayer/>}
      </ThemeProvider>
    </Box>
  );
}
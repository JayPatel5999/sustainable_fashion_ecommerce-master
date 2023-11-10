'use client'
import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ProfileIcon from '@mui/icons-material/Person';
import AddCardIcon from '@mui/icons-material/AddCard';
import SettingsIcon from '@mui/icons-material/Settings';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import { Button } from '@mui/base';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import InputAdornment from '@mui/material/InputAdornment';
import Logo from '../../public/logo.svg';
import "slick-carousel/slick/slick.css";

const DRAWER_WIDTH = 200;



const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: SettingsIcon },
  { text: 'Support', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon },
];



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const matches = useMediaQuery('(max-width:624px)');

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>,  link: string) => {
    if (link === 'Profile') {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const LINKS = [
    { text: 'Home', href: '/', icon: HomeIcon },
    { text: 'Wishlist', href: '/wishlist', icon: StarIcon, action: () => { console.log('Wishlist Clicked') } },
    { text: 'Cart', href: '/Cart', icon: AddShoppingCartIcon, action: null },
    { text: 'Profile', href: '/profile', icon: ProfileIcon, action: handleClick },
    { text: 'Orders', href: '/Order', icon: ShoppingBagIcon, action: null },
    // { text: 'Menu', href:'', icon: MenuIcon, action: toggleDrawer(true) },
  ];

  const SIGNEDIN_SUBMENU = [
    { text: 'Profile', href: '/profile', icon: ProfileIcon, action: handleClick },
    { text: 'My Account', href: '/', icon: SettingsIcon, action: () => { console.log('My Account Clicked') } },
    { text: 'Settings', href: '/', icon: SettingsIcon, action: () => { console.log('Setting Clicked') } },
    { text: 'Logout', href: '/', icon: LogoutIcon, action: () => { console.log('Logout Clicked') } },

  ];

  const SIGNEDOUT_SUBMENU = [
    { text: 'Sign In', href: '/signin', icon: ProfileIcon, action: handleClick },
    { text: 'Sign Up', href: '/signup', icon: SettingsIcon, action: () => { console.log('My Account Clicked') } },

  ];


  return (
    <html lang="en">
      <body className="font-bodyFont">
        <ThemeRegistry>
          <AppBar position="relative" sx={{ zIndex: 2000, backgroundColor: '#A7D397' }} >
            <Toolbar sx={{ backgroundColor: '#A7D397', justifyContent: 'space-between' }}>
              <Button href="/"  >
                <img src={Logo.src} alt="logo" width="150px" height="70px" />
              </Button>

              <Toolbar
                sx={{
                  backgroundColor: '#A7D397',
                  justifyContent: 'center',
                  padding: '0 16px', // Adjust padding as needed
                  borderRadius: 6, // Rounded corners
                  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', // Add subtle shadow
                  margin: '20px 0', // Adjust margin as needed
                }}
              >
                <TextField
                  placeholder="Search Products..."
                  fullWidth // Make the search bar span the entire width
                  InputProps={{
                    style: {
                      fontSize: 16, // Adjust the font size
                      paddingLeft: 16, // Padding for the input text
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'text.secondary' }} /> {/* Adjust icon color */}
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'primary.main', // Adjust the border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.dark', // Adjust the border color on hover
                        borderRadius: 6, // Rounded corners
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main', // Adjust the border color when focused
                      },
                    },
                  }}
                />
              </Toolbar>


              <Toolbar sx={{
                backgroundColor: '#A7D397',
                justifyContent: 'end',
              }}>
                {!matches && (
                  <List sx={{ display: 'flex', gap: 1 }}>
                    {LINKS.map(({ text, href, icon: Icon, action }) => (
                      <Tooltip title={text} placement="bottom">
                        <ListItem key={href} disablePadding>
                          <ListItemButton component={Link} href={href} sx={{ width: '50px' }} onClick={(e) => handleClick(e, text)}>
                            <ListItemIcon>
                              <Icon />
                            </ListItemIcon>
                            {/* <ListItemText primary={text} sx={{color:'black'}}/> */}
                          </ListItemButton>
                        </ListItem>
                      </Tooltip>
                    ))}

                    {/* <Tooltip title="Menu" placement="bottom">
                      <MenuIcon sx={{color:'black'}} />
                    </Tooltip> */}
                  </List>
                )}

                {matches && (
                  <List sx={{ display: 'flex', gap: 1 }}>
                    <Button onClick={toggleDrawer(true)}>
                      <MenuIcon sx={{ color: 'black' }} />
                    </Button>
                    <SwipeableDrawer
                      anchor='right'
                      open={drawerOpen}
                      onClose={toggleDrawer(false)}
                      onOpen={toggleDrawer(true)}
                      sx={{ zIndex: 2000 }}
                    >
                      <List>
                        {LINKS.map(({ text, href, icon: Icon, action }) => (
                          <ListItem key={href} disablePadding>
                            <ListItemButton component={Link} href={href} >
                              <ListItemIcon>
                                <Icon />
                              </ListItemIcon>
                              <ListItemText primary={text} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </SwipeableDrawer>
                  </List>
                )}
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  style={{ zIndex : 2001}}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      zIndex: 9000,
                      backgroundColor: '#ffffff',
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >

                  {userLoggedIn && SIGNEDIN_SUBMENU.map(({ text, href, icon: Icon, action }) => (
                    <MenuItem key={href}
                      sx={{
                        padding: '10px 20px', // Adjust padding
                        '&:hover': {
                          backgroundColor: '#A7D397', // Add hover effect
                        },
                      }} >
                      {text !== 'Profile' ? (
                        <Link href={href} >
                          <ListItemIcon>
                            <Icon />{text}
                          </ListItemIcon>
                        </Link>
                      ) : (
                        <div>
                          <ListItemIcon>
                            <Icon />{text}
                          </ListItemIcon>
                        </div>
                      )}
                    </MenuItem>
                  ))}

                  {!userLoggedIn && SIGNEDOUT_SUBMENU.map(({ text, href, icon: Icon, action }) => (
                    <MenuItem key={href}
                      sx={{
                        padding: '10px 20px', // Adjust padding
                        '&:hover': {
                          backgroundColor: '#A7D397', // Add hover effect
                        },
                      }} >
                      <Link href={href} >
                        <ListItemIcon>
                          <Icon />{text}
                        </ListItemIcon>
                      </Link>
                    </MenuItem>
                  ))}

                  {/* <MenuItem onClick={handleClose} href='/profile'>
                        <Avatar /> Profile
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem> */}
                </Menu>
              </Toolbar>
            </Toolbar>

          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              mt: ['48px', '56px', '4px'],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}

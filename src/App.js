import * as React from 'react';
import './App.css'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Seeds from './Pages/seeds/Seeds';
import NewSeed from './Pages/seeds/NewSeed';
import Sales from './Pages/sales/Sales';
import Purchase from './Pages/purchase/Purchase';
import Vendor from './Pages/Vendor/Vendor';

const drawerWidth = 240;

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

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
             Seed Inventory Management
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <ul className='list-unstyled p-3 menu'>
          <li className='d-flex gap-4 align-items-center'><i className="bi bi-box fs-3"></i><Link to="/"><span className="">Dashboard</span></Link></li>
          <li className='d-flex gap-4 align-items-center'><i className="bi bi-bezier2 fs-3"></i><Link to="/seeds"><span className="">Seeds</span></Link></li>
          <li className='d-flex gap-4 align-items-center'><i className="bi bi-bar-chart-steps fs-3"></i><Link to="/categories"><span className="">Categories</span></Link></li>
          <li className='d-flex gap-4 align-items-center'><i className="bi bi-bar-chart-line fs-3"></i><Link to="/seed/sales"><span className="">Sales</span></Link></li>
          <li className='d-flex gap-4 align-items-center'><i className="bi bi-wallet fs-3"></i><Link to="/purchase"><span className="">Purchases</span></Link></li>
          <li className='d-flex gap-4 align-items-center'><i className="bi bi-arrow-repeat fs-3"></i><Link to="/returns"><span className="">Returns</span></Link></li>
          <li className='d-flex gap-4 align-items-center'><i className="bi bi-people fs-3"></i><Link to="/vendors"><span className="">Vendors</span></Link></li>
          <li className='d-flex gap-4 align-items-center'><i className="bi bi-receipt fs-3"></i><Link to="/reports"><span className="">Reports</span></Link></li>
        </ul>

          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/seeds' element={<Seeds />} />
            <Route path='/seeds/new' element={<NewSeed />} />
            <Route path='/seed/sales' element={<Sales />} />
            <Route path='/vendors' element={<Vendor />} />
            <Route path='/purchase' element={<Purchase />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

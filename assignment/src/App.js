import React, { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import ArticleIcon from '@mui/icons-material/Article'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LogoutIcon from '@mui/icons-material/Logout'
import AppsIcon from '@mui/icons-material/Apps'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Home from './Components/Home'
import Chart from './Components/Chart'
import IMG from './assets/logo.png'
import Data from './Components/Data'
const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  // ... (previous code)
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  // ... (previous code)
}))

const App = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <Router>
      <div>
      <Box sx={{ display: 'flex', paddingLeft: open ? drawerWidth : 0 }}>
          <CssBaseline />
          <AppBar position='fixed' open={open}>
            <Tabs
              variant='fullWidth'
              value={activeTab}
              onChange={handleTabChange}
              // indicatorColor='primary'
            >
              <Tab  component={Link} to='/' />
              <Tab  component={Link} to='/chart' />
              <Tab  component={Link} to='/data' />
            </Tabs>
          </AppBar>
          <Drawer variant='permanent'>
            <Divider />
            <List>
              <img width={70} height={70} src={IMG} />

              {/* Home Section Tabs */}
              <Tabs
                orientation='vertical'
                value={activeTab}
                onChange={handleTabChange}
                variant='scrollable'
                scrollButtons='auto'
              >
                <Tab icon={<HomeIcon />} exact component={Link} to='/' />
                <Tab
                  icon={<ArticleIcon />}
                  exact
                  component={Link}
                  to='/chart'
                />
                <Tab
                  icon={<PermContactCalendarIcon />}
                  component={Link}
                  to='/data'
                />
                <Tab icon={<SearchIcon />} component={Link} to='/inbox' />
                <Tab icon={<AppsIcon />} component={Link} to='/apps' />
              </Tabs>
            </List>
            <Divider />

            {/* Notifications Section Tabs */}
            <Tabs
              orientation='vertical'
              variant='scrollable'
              scrollButtons='auto'
            >
              <Tab
                icon={<NotificationsIcon />}
                exact
                component={Link}
                to='/notifications'
              />
              <Tab icon={<LogoutIcon />} exact component={Link} to='/logout' />
            </Tabs>
          </Drawer>
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/chart' element={<Chart />} />
              <Route path='/data' element={<Data />} />
            </Routes>
          </Box>
        </Box>
      </div>
    </Router>
  )
}

export default App

import { AppBar, Toolbar, styled } from '@mui/material'

import { NavLink } from 'react-router-dom'

const Header = styled(AppBar)`
  background: #111111;
`
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: orange;
  text-decoration: none;
`

const NavBar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <h2 style={{ marginRight: 75 }}> Task Lister</h2>
        <Tabs to='/'>All Tasks</Tabs>
        <Tabs to='add-task'>Add Task</Tabs>
      </Toolbar>
    </Header>
  )
}

export default NavBar

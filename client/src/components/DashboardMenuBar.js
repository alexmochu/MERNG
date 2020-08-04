import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function DashboardMenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Menu position="center">
        <Menu.Item name="Drafts" onClick={logout} />
        <Menu.Item name="Published" onClick={logout} />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
}

export default DashboardMenuBar;

/* @flow */

import React from 'react';
import FontAwesome from 'react-fontawesome';
import Page from 'components/atoms/Page';
import Tooltip from 'components/atoms/Tooltip';
import Sidebar from 'components/atoms/Sidebar';
import SidebarLink from 'components/atoms/SidebarLink';

const Admin = (): React$Element<any> => (
  <Page>
    <Sidebar>
      <Tooltip right content="Home">
        <SidebarLink to="/"><FontAwesome name="home" /></SidebarLink>
      </Tooltip>
      <Tooltip right content="Documents">
        <SidebarLink to="/documents"><FontAwesome name="folder" /></SidebarLink>
      </Tooltip>
      <Tooltip right content="Users">
        <SidebarLink to="/users"><FontAwesome name="users" /></SidebarLink>
      </Tooltip>
      <Tooltip right content="Settings">
        <SidebarLink to="/settings"><FontAwesome name="cogs" /></SidebarLink>
      </Tooltip>
    </Sidebar>
  </Page>
);

export default Admin;

/* @flow */

import React from 'react';
import FontAwesome from 'react-fontawesome';
import Page from 'components/atoms/Page';
import Tooltip from 'components/atoms/Tooltip';
import Sidebar from 'components/atoms/Sidebar';
import SidebarGroup from 'components/atoms/SidebarGroup';
import SidebarLink from 'components/atoms/SidebarLink';
import SidebarButton from 'components/atoms/SidebarButton';

const Admin = (): React$Element<any> => (
  <Page gradient>
    <Sidebar>
      <SidebarGroup>
        <Tooltip right content="Home">
          <SidebarLink to="/admin"><FontAwesome name="home" /></SidebarLink>
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
      </SidebarGroup>
      <SidebarGroup>
        <Tooltip right content="Logout">
          <SidebarButton to="/settings"><FontAwesome name="sign-out" /></SidebarButton>
        </Tooltip>
      </SidebarGroup>
    </Sidebar>
  </Page>
);

export default Admin;

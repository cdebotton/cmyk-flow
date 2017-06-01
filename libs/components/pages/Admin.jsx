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

        <SidebarLink to="/admin">
          <FontAwesome name="home" />
          <Tooltip right>Home</Tooltip>
        </SidebarLink>
        <SidebarLink to="/documents">
          <FontAwesome name="folder" />
          <Tooltip right>Documents</Tooltip>
        </SidebarLink>
        <SidebarLink to="/users">
          <FontAwesome name="users" />
          <Tooltip right>Users</Tooltip>
        </SidebarLink>
        <SidebarLink to="/settings">
          <FontAwesome name="cogs" />
          <Tooltip right>Settings</Tooltip>
        </SidebarLink>
      </SidebarGroup>
      <SidebarButton>
        <FontAwesome name="sign-out" />
        <Tooltip right>Sign out</Tooltip>
      </SidebarButton>
    </Sidebar>
  </Page>
);

export default Admin;

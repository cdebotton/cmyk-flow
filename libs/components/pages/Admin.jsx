/* @flow */

import React from 'react';
import Switch from 'react-router/Switch';
import Route from 'react-router/Route';
import FontAwesome from 'react-fontawesome';
import Page from 'components/atoms/Page';
import Tooltip from 'components/atoms/Tooltip';
import Sidebar from 'components/atoms/Sidebar';
import SidebarGroup from 'components/atoms/SidebarGroup';
import SidebarLink from 'components/atoms/SidebarLink';
import SidebarButton from 'components/atoms/SidebarButton';
import Viewport from 'components/atoms/Viewport';
import Dashboard from 'components/pages/Dashboard';
import Documents from 'components/pages/Documents';
import Media from 'components/pages/Media';
import Users from 'containers/ReduxUsers';
import Settings from 'components/pages/Settings';
import Inbox from 'components/pages/Inbox';

import type { ContextRouter } from 'react-router';

export type Props = {
  handleSignout: () => void,
};

const Admin = ({ handleSignout, match }: Props & ContextRouter): React$Element<any> =>
  (<Page gradient>
    <Sidebar>
      <SidebarGroup>
        <SidebarLink to={`${match.path}`}>
          <FontAwesome name="home" />
          <Tooltip right>Home</Tooltip>
        </SidebarLink>
        <SidebarLink to={`${match.path}/documents`}>
          <FontAwesome name="folder" />
          <Tooltip right>Documents</Tooltip>
        </SidebarLink>
        <SidebarLink to={`${match.path}/media`}>
          <FontAwesome name="image" />
          <Tooltip right>Media</Tooltip>
        </SidebarLink>
        <SidebarLink to={`${match.path}/users`}>
          <FontAwesome name="users" />
          <Tooltip right>Users</Tooltip>
        </SidebarLink>
        <SidebarLink to={`${match.path}/settings`}>
          <FontAwesome name="cogs" />
          <Tooltip right>Settings</Tooltip>
        </SidebarLink>
        <SidebarLink to={`${match.path}/inbox`}>
          <FontAwesome name="inbox" />
          <Tooltip right>Inbox</Tooltip>
        </SidebarLink>
      </SidebarGroup>
      <SidebarGroup push>
        <SidebarButton onClick={handleSignout}>
          <FontAwesome name="sign-out" />
          <Tooltip right>Sign out</Tooltip>
        </SidebarButton>
      </SidebarGroup>
    </Sidebar>
    <Viewport>
      <Switch>
        <Route exact path={match.path} component={Dashboard} />
        <Route path={`${match.path}/documents`} component={Documents} />
        <Route path={`${match.path}/media`} component={Media} />
        <Route path={`${match.path}/users`} component={Users} />
        <Route path={`${match.path}/settings`} component={Settings} />
        <Route path={`${match.path}/inbox`} component={Inbox} />
      </Switch>
    </Viewport>
  </Page>);

export default Admin;

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
export class NavMenu extends Component {
  constructor() {
    this.state = {
      isOpen = false,
      side: 'left'
    }
  }
  displayName = NavMenu.name

  toggleDrawer() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Drawer open={this.state.side} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    );
  }
}

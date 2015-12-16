/*global AppLeftNav:true*/

// import React from 'react';
// import LeftNav from 'material-ui/lib/left-nav';
// import MenuItem from 'material-ui/lib/menus/menu-item';
// import RaisedButton from 'material-ui/lib/raised-button';

// https://github.com/callemall/material-ui/blob/master/docs/src/app/components/LeftNav/ExampleSimple.jsx

const { LeftNav, RaisedButton } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert, NavigationMenu } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;


AppLeftNav = React.createClass({

  getInitialState: function() {
    return {
      open: false
    };
  },

  handleToggle() {
    this.setState({open: !this.state.open});
    console.log('LeftNav.handleToggle > ', this.state.open);
  },

  handleTap(evt, params, opts) {
    console.log('handleClose', evt, params, opts);
    console.log('handleClose.state', this.state);
  },

  render() {
    return (
      <LeftNav
        open={this.state.open}
        docked={false}
        onChange={this.navigate}
        onRequestChange={open => this.setState({open})}
      >
        <MenuItem onTouchTap={this.handleTap} >first</MenuItem>
        <MenuItem>second</MenuItem>
      </LeftNav>
    );
  }

});

/* global AppLeftNav:true,NavButton:true */

// import React from 'react';
// import LeftNav from 'material-ui/lib/left-nav';
// import MenuItem from 'material-ui/lib/menus/menu-item';
// import RaisedButton from 'material-ui/lib/raised-button';

// https://github.com/callemall/material-ui/blob/master/docs/src/app/components/LeftNav/ExampleSimple.jsx

const { LeftNav, RaisedButton } = mui;
const { NavigationMoreVert, NavigationMenu } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;

AppLeftNav = React.createClass({

  navItems: [
    { label: 'top', route: '/' },
    { label: 'table', route: '/table' }
  ],

  getInitialState: function() {
    return {
      open: false
    };
  },

  closeMenu() {
    this.setState({open: false});
  },

  handleToggle() {
    this.setState({open: !this.state.open});
    console.log('LeftNav.handleToggle > ', this.state.open);
  },

  getNavButtons() {
    var that = this;
    // FIXME STFU with this unique key warning
    return this.navItems.map( item => {
      return <NavButton label={item.label} route={item.route} key={item.label} menuContainer={that} />;
    });
  },

  render() {
    return (
      <LeftNav
        open={this.state.open}
        docked={false}
        onChange={this.navigate}
        onRequestChange={open => this.setState({open})}
      >
        {this.getNavButtons()}
      </LeftNav>
    );
  }

});

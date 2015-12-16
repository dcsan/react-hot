const { AppBar, IconButton, IconMenu, LeftNav } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;

MainLayout = React.createClass({

  propTypes: {
    content: React.PropTypes.object
  },

  getMenuItems() {
    return [
      { route: '/', text: 'Home' },
      { route: '/table', text: 'Table' },
    ];
  },

  navigate(event, index, item) {
   console.log('navigate', item);
   FlowRouter.go(item.route);
  },

  render() {
    return (
      <div className='app'>
        <LeftNav
          ref='leftNav'
          docked={false}
          onChange={this.navigate}
          menuItems={this.getMenuItems()} />
        <AppBar
          title='Home'
          onLeftIconButtonTouchTap={()=>this.refs.leftNav.toggle()}
          style={{backgroundColor: Colors.deepOrange300}}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <NavigationMoreVert />
                </IconButton>
              } >
              <MenuItem primaryText='Help' index={1} />
              <MenuItem primaryText='Sign out' index={2} />
            </IconMenu>
        } />
        <main>
        {this.props.content}
        </main>
      </div>
    );
  }

});

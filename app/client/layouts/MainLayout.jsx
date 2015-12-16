const { AppBar, IconButton, IconMenu, LeftNav } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert, NavigationMenu } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;

MainLayout = React.createClass({

  propTypes: {
    content: React.PropTypes.object
  },

  getInitialState: function() {
    return {
      open: false
    };
  },

  getMenuItems() {
    return [
      { route: '/', text: 'Home' },
      { route: '/table', text: 'Table' }
    ];
  },

  navigate(event, index, item) {
   console.log('navigate', item);
   FlowRouter.go(item.route);
  },

  showLeftMenu() {
    console.log('show left', this.refs.leftNav);
    this.refs.leftNav.handleToggle();
  },

  render() {
    return (
      <div className='app'>

        <AppLeftNav
          ref='leftNav'
        />

        <AppBar
          title='Title'
          onTouchTap={this.showLeftMenu}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <NavigationMoreVert />
                </IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText='Refresh' />
              <MenuItem primaryText='Help' />
              <MenuItem primaryText='Sign out' />
            </IconMenu>
          }
        />
        <div>
          {this.props.content}
        </div>
      </div>
    );
  },


  Xrender() {
    return (
      <div className='app'>
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



// <IconMenu
//   iconButtonElement={
//     <IconButton>
//       <NavigationMenu />
//     </IconButton>
//   }

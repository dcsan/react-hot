/* global NavButton:true */

// had to break into separate file so it can contain its own vars

const { MenuItem } = mui.Menus;

NavButton = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    route: React.PropTypes.string,
    menuContainer: React.PropTypes.object
  },

  handleTap(evt) {
    console.log('route', this.props.route);
    FlowRouter.go(this.props.route);
    this.props.menuContainer.closeMenu();
  },

  render() {
    return (
      <MenuItem primaryText={this.props.label} onTouchTap={this.handleTap} />
    );
  }
});

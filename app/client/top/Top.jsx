/* global Markdown */

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

TopComponent = React.createClass({

  content() {
    return (
<Markdown>
# using material-ui with React and meteor

demo: http://react-hot.meteor.com
source: https://github.com/dcsan/react-hot

using:
- handsontable  http://docs.handsontable.com/
- material-ui  http://www.material-ui.com/#/

review examples and source code eg:
- [docs for LeftNav](https://github.com/callemall/material-ui/tree/master/docs/src/app/components/LeftNav)
- source implementation of [MenuItem](https://github.com/callemall/material-ui/blob/master/src/menus/menu-item.jsx)
</Markdown>
    );
  },

  render: function() {

    return (
      <div className='main'>
        <h2>React + HandsOnTable</h2>
        <ul>
          <li>
            <a href='/table'>handsontable</a>
          </li>
        </ul>
        <div>
{this.content()}
        </div>
      </div>
    );
  }

});

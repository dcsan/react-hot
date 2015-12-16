var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

TopComponent = React.createClass({

  render: function() {

    return (
      <div className='main'>
        <h1>React + H.O.T.</h1>
          <ul>
            <li>
              <a href='/table'>Users</a>
            </li>
          </ul>
      </div>
    );
  }

});

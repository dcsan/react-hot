FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(
      MainLayout, {
        content: <TopComponent/>
      }
    );
  }
});


FlowRouter.route('/table', {
  action: function(params, queryParams) {
    ReactLayout.render(
      MainLayout, {
        content: <LogTableComponent/>
      }
    );
  }
});

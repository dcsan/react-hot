var layout = MainLayout;


FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(
      layout, {
        content: <TopComponent/>
      }
    );
  }
});


FlowRouter.route('/table', {
  action: function(params, queryParams) {
    ReactLayout.render(
      layout, {
        content: <LogTableComponent/>
      }
    );
  }
});

const { RefreshIndicator, DropDownMenu } = mui;

LogTableComponent = React.createClass({

  displayName: 'LogTableComponent',
  mixins: [ReactMeteorData],


  getMeteorData() {
    var data = {
      sender: 'sender',
      username: 'username',
      ready: true
    }

    return data;
  },

  dropMenu() {
    let menuItems = [
       { payload: '1', text: 'Never' },
       { payload: '2', text: 'Every Night' },
       { payload: '3', text: 'Weeknights' },
       { payload: '4', text: 'Weekends' },
       { payload: '5', text: 'Weekly' },
    ];
    return (
      <DropDownMenu menuItems={menuItems} />
    )
  },

  initTable() {
    var container = document.getElementById('hot');

    this.hot = new Handsontable(container, {
        data: this.data,
        columns: [
          {data: 'sender'},
          {data: 'username'},
          {data: 'active', type: 'checkbox'},
          {data: 'helpFlag', type: 'checkbox'},
          {data: 'topic'},
          {data: 'trigger'},
          {data: 'rawtext'},
          {data: 'goto',
                type: 'dropdown',
                source: ['right', 'wrong', 'hint', 'answer']
          },
          {data: 'who',
                type: 'dropdown',
                source: ['hint', 'hotelman', 'roommate', 'teacher1']
          },
          {data: 'createdAt'}
        ],
        colHeaders: ['sender',  'username', 'active', 'helpFlag',   'topic', 'trigger', 'reply', 'goto', 'who', 'createdAt'],
        colWidths: [  60,       60,         30,       30,           80,       240,      240,        100,    100,        100],
        manualColumnResize: true,
        currentRowClassName: 'edit-table-row',
        currentColClassName: 'edit-table-col',
        // startRows: 5,
        // startCols: 4,
        minSpareRows: 1,
        // contextMenu: true,
        columnSorting: true,
        sortIndicator: true,

        afterChange: function(change, source) {
          console.log("afterChange");
        }

    });

  },

  componentDidMount() {
    console.log('DidMount');
    this.initTable();
  },

  render() {
    return (
      <div>
        <div className='top-ui-layer'>
        {this.dropMenu()}
        </div>
        <div id='hot' className='hot-table-container' />
      </div>
    );
  }


});

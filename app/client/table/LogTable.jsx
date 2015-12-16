/* global moment */

const { RefreshIndicator, DropDownMenu } = mui;

LogTableComponent = React.createClass({

  displayName: 'LogTableComponent',
  mixins: [ReactMeteorData],


  getMeteorData() {
    var data = {
      sender: 'sender',
      username: 'username',
      ready: true
    };

    return data;
  },

  dropMenu() {
    let menuItems = [
       { payload: '1', text: 'Never' },
       { payload: '2', text: 'Every Night' },
       { payload: '3', text: 'Weeknights' },
       { payload: '4', text: 'Weekends' },
       { payload: '5', text: 'Weekly' }
    ];
    return (
      <DropDownMenu menuItems={menuItems} />
    );
  },

  getData() {
    // var now = new Date();
    // now = moment().format(now, 'YYYY/MM/DD');
    var now = moment().format('YYYY/MM/DD');
    var data = [
      { name: 'alpha', active: true, menu: 'right', createdAt: now, next: 'two' },
      { name: 'bravo', active: false, menu: 'wrong', createdAt: now, next: 'three'  },
      { name: 'charlie', active: true, menu: 'right', createdAt: now, next: 'four'  },
      { name: 'delta', active: false, menu: 'right', createdAt: now, next: 'one'  }
    ];
    console.log('data', data);
    return data;
  },

  initTable() {
    var hotData = this.getData();
    var container = document.getElementById('hot');
    this.hot = new Handsontable(container, {
        data: hotData,
        columns: [
          {data: 'name'},
          {data: 'active', type: 'checkbox'},
          {data: 'menu',
                type: 'dropdown',
                source: ['right', 'wrong', 'hint', 'answer']
          },
          {data: 'next',
                type: 'autocomplete',
                source: ['one', 'two', 'three', 'four']
          },
          {
            // https://github.com/dbushell/Pikaday#configuration
            data: 'createdAt',
            type: 'date',
            dateFormat: 'YYYY/MM/DD',
            correctFormat: true
          }
        ],
        colHeaders: ['name',  'active', 'menu',   'next',   'date'],
        colWidths: [  200,    60,       100,       100,     250],
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
          console.log('afterChange');
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

var App = React.createClass({
  getInitialState: function() {
      return { filterInput: '' };
  },
  updateFilter: function (filterValue) {
      this.setState({filterInput: filterValue});
      this.refs.appGroup.props.filter = filterValue;
  },
  render: function() {
      var appsList = [];
      for (i = 0; i < 1000; i++) {
          appsList.push({name: "app " + i, link: "#"});
      }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 head">
                    <h1>My fucking apps</h1>
                </div>
            </div>
            <div className="row">
                  <SearchForm applyFilter={this.updateFilter} />
            </div>
            <div className="row">
                <div className="col-lg-12">
                   <AppGroup ref="appGroup" apps={appsList} filter={this.state.filterInput} />
                </div>
            </div>
        </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

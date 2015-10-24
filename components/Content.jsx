var Content = React.createClass({
  getInitialState: function() {
      return { filterInput: '' };
  },
  updateFilter: function (filterValue) {
      this.setState({filterInput: filterValue});
      this.refs.appGroup.props.filter = filterValue;
  },
  render: function() {
      var appsList = [
          { name: "Recytech", link: "http:///localhost/recytech"},
          { name: "Mompadel", link: "http:///localhost/mompadel/web/public"},
          { name: "Mompadel Admin", link: "http:///localhost/mompadel/mvstore"},
          { name: "Mompadel Wordpress", link: "http:///localhost/mompadel/wordpress"},
          { name: "JVLimpiezas", link: "http:///localhost/jvcalidad/web/public"},
          { name: "Antonio G Ródenas", link: "http:///localhost/rodenas"},
      ];
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
  <Content />,
  document.getElementById('content')
);

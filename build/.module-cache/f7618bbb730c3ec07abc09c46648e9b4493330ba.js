var App = React.createClass({displayName: "App",
  getInitialState: function() {
      return { filterInput: '' };
  },
  updateFilter: function (filterValue) {
      this.setState({filterInput: filterValue});
  },
  render: function() {
      var appsList = [];
      for (var i = 0; i < 1000; i++) {
          appsList.push({name: "app " + i, link: "#"});
      }
    return (
        React.createElement("div", {className: "container-fluid"}, 
            React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-lg-12 head"}, 
                    React.createElement("h1", null, "My apps")
                )
            ), 
            React.createElement("div", {className: "row"}, 
                  React.createElement(SearchForm, {applyFilter: this.updateFilter})
            ), 
            React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-lg-12"}, 
                   React.createElement(AppGroup, {ref: "appGroup", apps: appsList, filter: this.state.filterInput})
                )
            )
        )
    );
  }
});

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('app')
);

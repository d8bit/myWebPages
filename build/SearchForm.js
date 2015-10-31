var SearchForm = React.createClass({displayName: "SearchForm",
    changed: function (event) {
        this.props.applyFilter(event.target.value);
    },
    render: function() {
      return (
          React.createElement("div", {className: "col-lg-12"}, 
              React.createElement("form", {action: "", method: "POST"}, 
                  React.createElement("div", {className: "form-group"}, 
                      React.createElement("label", {htmlFor: "search"}, "Search"), 
                      React.createElement("input", {onChange: this.changed, type: "text", className: "form-control", ref: "searchInput", placeholder: "Search app"})
                  )
              )
          )
      );
    }
});

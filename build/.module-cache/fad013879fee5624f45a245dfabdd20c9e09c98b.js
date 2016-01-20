var SearchForm = React.createClass({displayName: "SearchForm",
    changed: function (event) {
        this.props.applyFilter(event.target.value);
    },
    render: function() {
      return (
          React.createElement("div", null, 
              React.createElement("div", {className: "col-lg-6"}, 
                  React.createElement("form", {action: "https://www.google.es/search", method: "GET", target: "_blank"}, 
                      React.createElement("div", {className: "form-group"}, 
                          React.createElement("label", {htmlFor: "googleSearcher"}, "Google"), 
                          React.createElement("input", {type: "text", className: "form-control", id: "googleSearcher", name: "q", placeholder: "Search in Google"})
                      )
                  )
              ), 
              React.createElement("div", {class: "clearfix"}), 
              React.createElement("div", {className: "col-lg-6"}, 
                  React.createElement("form", {action: "http://www.stackoverflow.com/search", method: "GET", target: "_blank"}, 
                      React.createElement("div", {className: "form-group"}, 
                          React.createElement("label", {htmlFor: "stackSearcher"}, "Stack Overflow"), 
                          React.createElement("input", {type: "text", className: "form-control", id: "stackSearcher", name: "q", placeholder: "Search in Stack Overflow"})
                      )
                  )
              ), 
              React.createElement("div", {class: "clearfix"}), 
              React.createElement("div", {className: "col-lg-6"}, 
                  React.createElement("form", {action: "", method: "POST"}, 
                      React.createElement("div", {className: "form-group"}, 
                          React.createElement("label", {htmlFor: "search"}, "Search"), 
                          React.createElement("input", {onChange: this.changed, type: "text", className: "form-control", ref: "searchInput", placeholder: "Search in apps"})
                      )
                  )
              )
          )
      );
    }
});

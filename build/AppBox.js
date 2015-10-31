var AppBox = React.createClass({displayName: "AppBox",
  render: function () {
    return (
        React.createElement("div", {className: "col-lg-6 app"}, React.createElement("a", {href: this.props.link}, React.createElement("span", null, this.props.name)))
    );
  }
});

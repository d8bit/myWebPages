var AppBox = React.createClass({displayName: "AppBox",
  render: function () {
    return (
        React.createElement("div", {className: "col-lg-4 app"}, React.createElement("a", {href: this.props.link, target: "_blank"}, React.createElement("span", null, this.props.name)))
    );
  }
});

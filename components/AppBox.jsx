var AppBox = React.createClass({
  render: function () {
    return (
        <div className="col-lg-3 app"><a href={this.props.link} target="_blank"><span>{this.props.name}</span></a></div>
    );
  }
});

var SearchForm = React.createClass({
    changed: function (event) {
        this.props.applyFilter(event.target.value);
    },
    render: function() {
      return (
          <div className="col-lg-12">
              <form action="" method="POST">
                  <div className="form-group">
                      <label htmlFor="search">Search</label>
                      <input onChange={this.changed} type="text" className="form-control" ref="searchInput" placeholder="Search app" />
                  </div>
              </form>
          </div>
      );
    }
});

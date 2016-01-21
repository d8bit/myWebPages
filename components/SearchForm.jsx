var SearchForm = React.createClass({
    changed: function (event) {
        this.props.applyFilter(event.target.value);
    },
    render: function() {
      return (
          <div>
              <div className="col-lg-6">
                  <form action="https://www.google.es/search" method="GET" target="_blank">
                      <div className="form-group">
                          <label htmlFor="googleSearcher">Google</label>
                          <input type="text" className="form-control" id="googleSearcher" name="q" placeholder="Search in Google" />
                      </div>
                  </form>
              </div>

              <div className="col-lg-6">
                  <form action="http://www.stackoverflow.com/search" method="GET" target="_blank">
                      <div className="form-group">
                          <label htmlFor="stackSearcher">Stack Overflow</label>
                          <input type="text" className="form-control" id="stackSearcher" name="q" placeholder="Search in Stack Overflow" />
                      </div>
                  </form>
              </div>
              <div className="col-lg-6">
                  <form action="" method="POST">
                      <div className="form-group">
                          <label htmlFor="search">Search</label>
                          <input onChange={this.changed} type="text" className="form-control" ref="searchInput" placeholder="Search in apps" />
                      </div>
                  </form>
              </div>
          </div>
      );
    }
});

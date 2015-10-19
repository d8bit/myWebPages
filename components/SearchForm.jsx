var SearchForm = React.createClass({
  filter: function(event) {
    var value = $(event.target).val();
    console.log(value);
  },
  render: function() {
    return (
        <div className="col-lg-12">
            <form action="" method="POST">
                <div className="form-group">
                    <label htmlFor="search">Search</label>
                    <input onChange={this.filter} type="text" className="form-control" id="search" placeholder="Search app" />
                </div>
            </form>
        </div>
    );
  }
});

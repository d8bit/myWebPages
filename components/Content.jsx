var Content = React.createClass({
  render: function() {
      var appsList = [
          { name: "App 1", link: "#"},
          { name: "App 2", link: "#"},
          { name: "App 3", link: "#"},
          { name: "App 4", link: "#"},
          { name: "App 5", link: "#"}
      ];
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 head">
                    <h1>My fucking apps</h1>
                </div>
            </div>
            <div className="row">
                  <SearchForm />
            </div>
            <div className="row">
                <div className="col-lg-12">
                   {
                       appsList.map(function (app){
                          return (
                              <AppBox link={app.link} name={app.name} />
                          );
                       })
                   }
                </div>
            </div>
        </div>
    );
  }
});

ReactDOM.render(
  <Content />,
  document.body
);

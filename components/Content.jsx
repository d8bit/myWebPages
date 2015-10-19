var Content = React.createClass({
  render: function() {
      var appsList = [
          { name: "Recytech", link: "http:///localhost/recytech"},
          { name: "Mompadel", link: "http:///localhost/mompadel/web/public"},
          { name: "Mompadel Admin", link: "http:///localhost/mompadel/mvstore"},
          { name: "Mompadel Wordpress", link: "http:///localhost/mompadel/wordpress"},
          { name: "JVLimpiezas", link: "http:///localhost/jvcalidad/web/public"},
          { name: "Antonio G Ródenas", link: "http:///localhost/rodenas"},
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
                   <AppGroup apps={appsList} />
                </div>
            </div>
        </div>
    );
  }
});

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);

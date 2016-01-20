var AppGroup = React.createClass({displayName: "AppGroup",
    render: function () {
        var filter = this.props.filter;
        return (
            React.createElement("div", null, 
            
                this.props.apps.map(function (app) {
                    if (app.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                        return(
                            React.createElement(AppBox, {key: app.name, name: app.name, link: app.link})
                        )
                    }
                })
            
            )
        );
    }
});

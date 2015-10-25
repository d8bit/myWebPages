var AppGroup = React.createClass({
    render: function () {
        var filter = this.props.filter;
        return (
            <div>
            {
                this.props.apps.map(function (app) {
                    if (app.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                        return(
                            <AppBox key={app.name} name={app.name} link={app.link} />
                        )
                    }
                })
            }
            </div>
        );
    }
});

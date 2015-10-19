var AppGroup = React.createClass({
    render: function () {
        return (
            <div>
            {
                this.props.apps.map(function (app) {
                    return(
                        <AppBox key={app.name} name={app.name} link={app.link} />
                    )
                })
            }
            </div>
        );
    }
});

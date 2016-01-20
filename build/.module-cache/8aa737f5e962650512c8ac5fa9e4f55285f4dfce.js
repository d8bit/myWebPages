/* Application */
var directories = '';
var App = React.createClass({displayName: "App",
    getInitialState: function() {
        return {
            directories: '',
            filterInput: ''
        };
    },
    /* Load ajax data */
    componentDidMount: function() {
        $.post('directories.php', {path: this.props.htdocs_path}, function(result) {
            if (this.isMounted()) {
                result = JSON.parse(result);
                this.setState({
                    directories: result
                });
            }
        }.bind(this));
    },
    updateFilter: function (filterValue) {
        this.setState({filterInput: filterValue});
    },
    render: function() {
        var appsList = [];
        for (i = 0; i < this.state.directories.length; i++) {
            appsList.push({name: this.state.directories[i], link: "http://localhost/" + this.state.directories[i]});
        }
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-lg-12 head"}, 
                        React.createElement("h1", null, this.props.title)
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement(SearchForm, {applyFilter: this.updateFilter})
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-lg-12"}, 
                       React.createElement(AppGroup, {ref: "appGroup", apps: appsList, filter: this.state.filterInput})
                    )
                )
            )
        );
    }
});


/* Application */
var directories = '';
var App = React.createClass({
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
            <div>
                <div className="row">
                    <div className="col-lg-12 head">
                        <h1>{this.props.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <SearchForm applyFilter={this.updateFilter} />
                </div>
                <div className="row">
                    <div className="col-lg-12">
                       <AppGroup ref="appGroup" apps={appsList} filter={this.state.filterInput} />
                    </div>
                </div>
            </div>
        );
    }
});


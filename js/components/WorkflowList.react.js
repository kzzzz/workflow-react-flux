var React = require("react");
var Workflow = require("./Workflow.react");

var WorkflowList = React.createClass({
    render: function () {
        return (
            <ul className="list-group">
                {this.props.workflows.map(this.createWorkflow)}
            </ul>
        );
    },
    createWorkflow: function (workflow) {
        return (<Workflow workflow={workflow}/>);
    }
});

module.exports = WorkflowList;
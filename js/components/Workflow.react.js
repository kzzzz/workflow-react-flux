var React = require("react");
var WorkflowActions = require("../actions/WorkflowActions");
var WorkflowInput = require("./WorkflowInput");

var Workflow = React.createClass({
    getInitialState: function () {
        return {
            isEditing: false
        }
    },
    render: function () {
        var workflow = this.props.workflow;

        var input;
        if (this.state.isEditing) {
            input = (<WorkflowInput
                onSave={this._onSave}
                workflow={workflow} />);
        }

        return (
            <li className="list-group-item">
                <div>
                    <span onDoubleClick={this._onDoubleClick}>
                        <h4>{workflow.name}</h4>
                    </span>
                    <span>hello</span>
                    <span className="pull-right">
                        <button onClick={this._onDestroyClick}>Delete</button>
                    </span>
                </div>
            {input}
            </li>
        );
    },
    _onDestroyClick: function () {
        WorkflowActions.destroy(this.props.workflow.id);
    },
    _onDoubleClick: function () {
        this.setState({isEditing: true});
    },
    _onSave: function () {
        WorkflowActions.update(this.props.workflow);
    }
});

module.exports = Workflow;
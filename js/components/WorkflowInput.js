var React = require("react");
var WorkflowActions = require("../actions/WorkflowActions");

var WorkflowInput = React.createClass({
    getInitialState: function () {
        return {
            workflow: this.props.workflow || ""
        };
    },
    render: function () {
        return (
            <input
                type="text"
                value={this.state.workflow.name}
                onBlur={this._save}
                onChange = {this._onChange}/>

        );
    },
    _save: function () {

        this.props.onSave(this.state.workflow);
        this.setState({
            workflow: workflow
        });
    },
    _onChange: function () {

    }
});

module.exports = WorkflowInput;
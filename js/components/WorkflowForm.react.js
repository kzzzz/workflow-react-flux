var React = require("react");
var WorkflowActions = require("../actions/WorkflowActions");

var WorkflowForm = React.createClass({
    submitForm: function (e) {
        e.preventDefault();

        var newWorkflow = {
            name: this.refs.name.getDOMNode().value
        };

        this.refs.workflowForm.getDOMNode().reset();
        WorkflowActions.create(newWorkflow);
    },
    render: function () {
        return (
            <div>
                <form ref="workflowForm">
                    <input type="text" ref="name" className="form-control"/>
                    <button type="submit"
                        onClick={this.submitForm}
                        className="btn btn-primary btn-block">Add</button>
                </form>
            </div>
        );
    }
});

module.exports = WorkflowForm;

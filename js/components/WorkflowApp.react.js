var WorkflowApp = (function () {
    "use strict";

    var React = require('react');
    var WorkflowList = require("./WorkflowList.react");
    var WorkflowForm = require("./WorkflowForm.react");
    var WorkflowStore = require("../stores/WorkflowStore");

    return React.createClass({
        getInitialState: function () {
            return _getWorkflowState();
        },
        componentDidMount: function () {
            WorkflowStore.addChangeListener(this._onChange)
        },
        componentWillUnmount: function () {
            WorkflowStore.removeChangeListener(this._onChange);
        },
        render: function () {
            return (
                <div className="container">
                    <div className="jumbotron">Workflow - Flux</div>
                    <div>
                        <WorkflowForm />
                    </div>
                    <div id="main">
                        <WorkflowList workflows={this.state.workflows} />
                    </div>
                </div>
            );
        },
        _onChange: function () {
            this.setState(_getWorkflowState());
        }
    });

    function _getWorkflowState() {
        return {
            workflows: WorkflowStore.getAll()
        };
    }
})();


module.exports = WorkflowApp;

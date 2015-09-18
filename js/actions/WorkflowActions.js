var AppDispathcher = require("../dispatcher/AppDispatcher");
var WorkflowConstants = require("../constants/WorkflowConstants");

var WorkflowActions = {
    create: function (workflow) {
        AppDispathcher.dispatch({
            actionType: WorkflowConstants.WORKFLOW_CREATE,
            workflow: workflow
        })
    },
    destroy: function (id) {
        AppDispathcher.dispatch({
            actionType: WorkflowConstants.WORKFLOW_DESTROY,
            id: id
        });
    },
    update: function (workflow) {
        AppDispathcher.dispatch({
            actionType: WorkflowActions.WORKFLOW_UPDATE,
            workkflow: workflow
        })
    }
};

module.exports = WorkflowActions;

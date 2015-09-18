var AppDispathcer = require("../dispatcher/AppDispatcher");
var EventEmitter = require("events").EventEmitter;
var WorkflowConstants = require("../constants/WorkflowConstants");
var assign = require("object-assign");
var _ = require("lodash");

var CHANGE_EVENT = "change";

var _workflows = [
    {id: 1, name: "workflow foo"},
    {id: 2, name: "workflow bar"}
];

function create(workflow) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _workflows.push({
        id: id,
        name: workflow.name
    });
}

function destroy(id) {
    _.remove(_workflows, function (workflow) {
        return workflow.id === id;
    });
}

function update(workflow){
    var wf = _.first(_workflows, {"id": workflow.id});
    console.log("Workflow updated", wf);
}

var WorkflowStore = assign({}, EventEmitter.prototype, {
    getAll: function () {
        return _workflows;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispathcer.register(function (action) {
    switch (action.actionType) {
        case WorkflowConstants.WORKFLOW_CREATE:
            create(action.workflow);
            WorkflowStore.emitChange();
            break;
        case WorkflowConstants.WORKFLOW_DESTROY:
            destroy(action.id);
            WorkflowStore.emitChange();
            break;
        case WorkflowConstants.WORKFLOW_UPDATE:
            update(action.workflow);
            WorkflowStore.emitChange();
        default:
            break;
    }
});

module.exports = WorkflowStore;
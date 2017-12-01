'use strict';
module.exports = function (app) {
    //var todoList = require('../controllers/todoListController');
    var iotHub = require('../controllers/iotHubController');

    // // todoList Routes
    // app.route('/tasks')
    //     .get(todoList.list_all_tasks)
    //     .post(todoList.create_a_task);


    // app.route('/tasks/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);

    app.route('/connect')
        .post(iotHub.connect_device)
        .get(iotHub.connect_test)
};
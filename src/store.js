module.export = {
  state: {
    tasks: [{
      title: 'title here',
      color: '#F00',
      detail: 'nothing more',
      createdAt: '',
      due: '',
    }],
    completedTasks: [],
    deletedTasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    completeTask(state, taskId) {

    },
    deleteTask(state, taskId) {

    }
  }
}

<template lang="jade">
  task-list
</template>

<script>
var TaskList = require("./TaskList.vue");
var Vue = require("vue");
Vue.component('task-list', TaskList);
module.export = {
  name: 'app',
  data () {
    return {};
  },
  components: {
    TaskList
  }
}
</script>

<template lang="jade">
ul
  for task in tasks
    li #{task.color} #{task.title}
</template>

<script>
module.export = {
  name: "task-list",
  computed: {
    tasks () {
      return this.$store.state.tasks;
    }
  }
}
</script>

<style>
</style>

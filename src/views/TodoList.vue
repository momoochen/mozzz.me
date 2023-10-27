<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="todolist/todolist-cover.jpg"
    project-title="Todo List Design"
    project-text="Todo List Design"
    project-date="2020"
  />
</template>

<script>
import DetailView from '@/components/DetailView'

export default {
  components: {
    DetailView
  },
  data() {
    return {
      projectSkill: ['Html', 'CSS', 'JavaScript', 'Illustration'],
      projectImages: ['todolist/todolist.gif']
    }
  }
}
</script>

<style lang="scss" scoped></style>

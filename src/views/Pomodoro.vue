<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="pomodoro/pomodoro-cover.jpg"
    project-title="Pomodoro"
    project-text="Pomodoro Desgin"
    project-date="2019"
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
      projectSkill: ['Html', 'CSS', 'JavaScript'],
      projectImages: ['pomodoro/pomodoro.gif', 'pomodoro/pomodoro-01.jpg']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

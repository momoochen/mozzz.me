<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url=""
    project-title="Aibiga"
    project-text="Client: Azaburu.com"
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
      projectSkill: ['Web Design'],
      projectImages: []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="abiga/abiga-cover.jpg"
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
      projectImages: [
        'abiga/abiga-01.jpg',
        'abiga/abiga-02.jpg',
        'abiga/abiga-03.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

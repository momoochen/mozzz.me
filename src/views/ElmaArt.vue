<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="elma-art/elma-art-cover.jpg"
    project-title="Elma Art Studio"
    project-text="Client: Elma Art Studio (ft.writing_9tao)"
    project-date="2021"
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
      projectSkill: ['Graphic Design', 'Branding Design'],
      projectImages: [
        'elma-art/elma-art-01.jpg',
        'elma-art/elma-art-02.jpg',
        'elma-art/elma-art-03.jpg',
        'elma-art/elma-art-04.jpg',
        'elma-art/elma-art-05.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

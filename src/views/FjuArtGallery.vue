<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="fju/fju-cover.jpg"
    project-title="FJU Art Gallery"
    project-text="Client: FJU Art Gallery"
    project-date="2012 ~ 2013"
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
      projectSkill: ['Key Vision', 'Web Design'],
      projectImages: [
        'fju/fju-01.jpg',
        'fju/fju-02.jpg',
        'fju/fju-03.jpg',
        'fju/fju-04.jpg',
        'fju/fju-05.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

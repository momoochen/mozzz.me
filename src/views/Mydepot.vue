<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="mydepot/mydepot-cover.jpg"
    project-title="Mydepot"
    project-text="client: Mydepot"
    project-date="2020~2021"
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
      projectSkill: ['Sketch', 'Illustration'],
      projectImages: [
        'mydepot/mydepot-01.jpg',
        'mydepot/mydepot-02.jpg',
        'mydepot/mydepot-03.jpg',
        'mydepot/mydepot-04.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

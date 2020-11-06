<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="maskmap/maskmap-cover.jpg"
    project-title="Mask Map"
    project-text="Mask Map"
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
      projectSkill: ['Sketch', 'Illustration'],
      projectImages: ['maskmap/maskmap-01.jpg']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

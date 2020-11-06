<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="insto-store/insto-store-cover.jpg"
    project-title="INSTO Store"
    project-text="Client: Installments, Inc"
    project-date="2017"
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
      projectImages: ['insto-store/insto-store-01.jpg']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

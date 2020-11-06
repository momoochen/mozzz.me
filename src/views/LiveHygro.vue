<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="livehygro/livehygro-cover.jpg"
    project-title="Live Hygro"
    project-text="Client: Fluid Fish 福祿魚"
    project-date="2014"
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
      projectSkill: ['Branding', 'Key Vision', 'App UI Design'],
      projectImages: ['livehygro/livehygro-01.jpg']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

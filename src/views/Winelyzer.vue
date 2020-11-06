<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="winelyzer/winelyzer-cover.jpg"
    project-title="Winelyzer"
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
      projectSkill: ['Branding', 'Key VISION', 'App UI Design'],
      projectImages: ['winelyzer/winelyzer.jpg']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

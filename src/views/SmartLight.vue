<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="smartlight/smartlight-cover.jpg"
    project-title="Smart Light"
    project-text="Client:Fluid Fish 福祿魚"
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
      projectImages: [
        'smartlight/smartlight-01.jpg',
        'smartlight/smartlight-02.jpg',
        'smartlight/smartlight-03.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

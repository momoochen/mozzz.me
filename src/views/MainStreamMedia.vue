<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="mainstream/main-stream-media-cover.jpg"
    project-title="Main Stream Media"
    project-text="Client: Main Stream Media"
    project-date="2015"
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
      projectSkill: ['Branding', 'Key Vision', 'Illustration'],
      projectImages: [
        'mainstream/mainstream-01.jpg',
        'mainstream/mainstream-02.jpg',
        'mainstream/mainstream-03.jpg',
        'mainstream/msmlogo-01.png',
        'mainstream/summer-01.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

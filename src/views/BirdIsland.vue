<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="birdisland/birdisland-cover.jpg"
    project-title="Bird Island"
    project-text="Graphic Design"
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
      projectSkill: ['Branding', 'Key Vision'],
      projectImages: [
        'birdisland/birdisland-01.jpg',
        'birdisland/birdisland-02.jpg',
        'birdisland/birdisland-03.jpg',
        'birdisland/birdisland-04.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

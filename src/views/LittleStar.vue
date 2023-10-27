<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="little-star/little-star-cover.jpg"
    project-title="Little Star"
    project-text="Game Design"
    project-date="2018"
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
      projectSkill: ['Html', 'CSS', 'JavaScript', 'Illustration', 'Phaser'],
      projectImages: [
        'little-star/littlestar-01.jpg',
        'little-star/littlestar-02.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

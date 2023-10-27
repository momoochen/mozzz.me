<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="roastin/roastin-cover.jpg"
    project-title="Roastin Coffee"
    project-text="Client: Roastin Coffee 蘿斯汀咖啡"
    project-date="2015 ~ 19"
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
      projectSkill: ['Branding', 'Packaging', 'Key VISION'],
      projectImages: [
        'roastin/roastin01.jpg',
        'roastin/roastin02.jpg',
        'roastin/roastin03.jpg',
        'roastin/roastin04.jpg',
        'roastin/roastin05.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

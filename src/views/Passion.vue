<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="passion/passion-cover.jpg"
    project-title="Passion"
    project-text="Web UI Design"
    project-date="2016"
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
      projectSkill: ['Key Vision', 'Web Design'],
      projectImages: [
        'passion/passion-01.jpg',
        'passion/passion-02.jpg',
        'passion/passion-03.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

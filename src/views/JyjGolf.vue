<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="JYJ/JYJ-cover.jpg"
    project-title="JYJ Golf"
    project-text="Graphic Design"
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
      projectSkill: ['Branding'],
      projectImages: ['JYJ/JYJ-01.jpg', 'JYJ/JYJ-02.jpg', 'JYJ/JYJ-03.jpg']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

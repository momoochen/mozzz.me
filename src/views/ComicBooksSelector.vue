<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="comicbooks-selector/comicbooks-selector-cover.jpg"
    project-title="Comic Books Selector"
    project-text="Web Selector Design"
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
      projectSkill: ['Html', 'CSS', 'Vue', 'Illustration', 'Phaser'],
      projectImages: [
        'comicbooks-selector/comicbooks-selector-01.jpg'
        // 'comicbooks-selector/comicbooks-selector-02.gif'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

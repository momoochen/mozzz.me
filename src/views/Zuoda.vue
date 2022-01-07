<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="zuoda/zuoda-cover.jpg"
    project-title="ZUODA Studio"
    project-text="Client: ZUODA Studio"
    project-date="2021"
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
      projectSkill: ['Graphic Design', 'Branding Design'],
      projectImages: [
        'zuoda/zuoda-01.jpg',
        'zuoda/zuoda-02.jpg',
        'zuoda/zuoda-03.jpg',
        'zuoda/zuoda-04.jpg',
        'zuoda/zuoda-05.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

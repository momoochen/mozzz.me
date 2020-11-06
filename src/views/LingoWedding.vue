<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="lingo-wedding/lingo-cover-1.jpg"
    project-title="Lingo Wedding"
    project-text="Client: Lingo Wedding 林果造型"
    project-date="2014 ~ 2015"
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
        'lingo-wedding/lingo-01.jpg',
        'lingo-wedding/lingo-02.jpg',
        'lingo-wedding/lingo-03.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

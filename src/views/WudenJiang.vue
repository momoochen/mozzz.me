<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="wudenjiang/wuden-cover.jpg"
    project-title="Wu Den Jiang"
    project-text="Client: 五燈獎豬腳滷肉飯 Wu Den Jaing"
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
      projectSkill: ['Graphic Design', 'Web Design'],
      projectImages: [
        'wudenjiang/wuden-01.jpg',
        'wudenjiang/wuden-02.jpg',
        'wudenjiang/wuden-03.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

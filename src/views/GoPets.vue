<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="gopets/gopets-cover.jpg"
    project-title="Go Pets!"
    project-text="App UI Desgin"
    project-date="2014"
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
      projectSkill: ['Branding', 'App UI Design'],
      projectImages: ['gopets/gopets-01.jpg', 'gopets/gopets-02.jpg']
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="drk/drk-cover.jpg"
    project-title="Dr.Korea"
    project-text="Client: Dr.Korea 韓博士"
    project-date="2018 ~ 2019"
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
      projectSkill: ['Branding', 'Key Vision', 'Web Design'],
      projectImages: ['drk/drk-01.jpg', 'drk/drk-02.jpg', 'drk/drk-03.jpg']
    }
  }
}
</script>

<style lang="scss" scoped></style>

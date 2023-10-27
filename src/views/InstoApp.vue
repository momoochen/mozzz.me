<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="insto/insto-cover.jpg"
    project-title="INSTO"
    project-text="Client: Installments, Inc"
    project-date="2016 ~ 18"
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
      projectSkill: ['Branding', 'Key Vision', 'App UI', 'Web UI'],
      projectImages: [
        'insto/insto-01.jpg',
        'insto/insto-02.jpg',
        'insto/insto-03.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

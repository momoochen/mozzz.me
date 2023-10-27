<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="insto-tap/insto-tap-cover.jpg"
    project-title="INSTO Tap"
    project-text="Client: Installments, Inc / Insto Design Team"
    project-date="2020 ~ current"
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
        'insto-tap/insto-tap-01.jpg',
        'insto-tap/insto-tap-02.jpg',
        'insto-tap/insto-tap-03.jpg',
        'insto-tap/insto-tap-04.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

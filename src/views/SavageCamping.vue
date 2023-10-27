<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="savage-camping/savage-camping-cover.jpg"
    project-title="Savage Camping"
    project-text="Graphic Design / Illustration"
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
      projectSkill: ['Illustration'],
      projectImages: ['savage-camping/savage-camping-01.jpg']
    }
  }
}
</script>

<style lang="scss" scoped></style>

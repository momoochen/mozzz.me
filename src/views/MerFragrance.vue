<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="mer/mer-cover.jpg"
    project-title="Howdy"
    project-text="Client: mer Design"
    project-date="2019"
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
      projectSkill: ['Branding', 'Key Vision', 'Illustration'],
      projectImages: [
        'mer/mer-01.jpg',
        'mer/mer-02.jpg',
        'mer/mer-03.jpg',
        'mer/mer-04.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

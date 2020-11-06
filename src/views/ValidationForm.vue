<template>
  <DetailView 
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="validation-form/validation-form-cover.jpg"
    project-title="Validation Form Design"
    project-text="Validation Form Design"
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
      projectSkill: ['Html', 'CSS', 'Vue', 'Illustration'],
      projectImages: [
        'validation-form/validation-form-01.jpg',
        'validation-form/validation-form-02.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

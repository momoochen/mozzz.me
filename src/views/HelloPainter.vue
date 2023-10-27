<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="hello-painter/hello-painter-cover.jpg"
    project-title="Hello Painter"
    project-text="Web Painter Desgin"
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
      projectSkill: ['Html', 'CSS', 'JavaScript'],
      projectImages: [
        'hello-painter/hello-painter-01.gif',
        'hello-painter/hello-painter-02.gif'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

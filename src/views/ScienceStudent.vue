<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="science-student/science-student-cover.jpg"
    project-title="科學生"
    project-text="Client: Azaburu.com"
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
      projectSkill: ['Web Design', 'RWD'],
      projectImages: [
        'science-student/science-student-01.jpg',
        'science-student/science-student-02.jpg',
        'science-student/science-student-03.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

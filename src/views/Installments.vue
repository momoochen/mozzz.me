<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="installments/installments-cover.jpg"
    project-title="installments.com"
    project-text="Client: Installments Inc"
    project-date="2014 ~ 2016"
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
      projectSkill: ['Branding', 'Key VISION', 'UI Design'],
      projectImages: [
        'installments/installments-01.jpg',
        'installments/installments-02.jpg',
        'installments/installments-03.jpg',
        'installments/installments-04.jpg',
        'installments/installments-05.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

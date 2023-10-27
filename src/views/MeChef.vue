<template>
  <div id="mechef">
    <DetailView
      :project-skill="projectSkill"
      :project-images="projectImages"
      image-url="mechef/mechef-cover.jpg"
      project-title="MeChef"
      project-text="Client: MeChef"
      project-date="2017 ~ 2018"
    />
  </div>
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
      projectImages: [
        'mechef/mechef-01.jpg',
        'mechef/mechef-02.jpg',
        'mechef/mechef-03.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

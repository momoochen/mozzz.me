<template>
  <DetailView
    :project-skill="projectSkill"
    :project-images="projectImages"
    image-url="music-player/music-player-cover.jpg"
    project-title="Music Player"
    project-text="Music Player Desgin"
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
      projectSkill: ['Html', 'CSS', 'JavaScript'],
      projectImages: [
        'music-player/music-player-01.jpg',
        'music-player/music-player-02.jpg'
        // 'music-player/musicplayer.gif'
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

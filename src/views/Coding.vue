<template>
  <ListView
    :projects="projects" 
    list-title="Coding" 
  />
</template>

<script>
import ListView from '@/components/ListView'
export default {
  components: {
    ListView
  },
  data() {
    return {
      projects: [
        {
          url: '/wudenjiang',
          imageUrl: 'wudenjiang/wuden-cover.jpg',
          title: 'Wu Den Jiang',
          subtitle: 'Official Website'
        },
        {
          url: '/todolist',
          imageUrl: 'todolist/todolist-cover.jpg',
          title: 'Todo List',
          subtitle: 'Codepen'
        },
        {
          url: '/music-player',
          imageUrl: 'music-player/music-player-cover.jpg',
          title: 'Music Player',
          subtitle: 'Website'
        },
        {
          url: '/pomodoro',
          imageUrl: 'pomodoro/pomodoro-cover.jpg',
          title: 'Pomodoro',
          subtitle: 'Website'
        },
        {
          url: '/hello-painter',
          imageUrl: 'hello-painter/hello-painter-cover.jpg',
          title: 'Hello Painter',
          subtitle: 'Website'
        },
        {
          url: '/little-star',
          imageUrl: 'little-star/little-star-cover.jpg',
          title: 'Little Star',
          subtitle: 'Game'
        },
        {
          url: '/comicbooks-selector',
          imageUrl: 'comicbooks-selector/comicbooks-selector-cover.jpg',
          title: 'Comicbooks Selector',
          subtitle: 'Website'
        },
        {
          url: '/validation-form',
          imageUrl: 'validation-form/validation-form-cover.jpg',
          title: 'Validation Form Design',
          subtitle: 'Website'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

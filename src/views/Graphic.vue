<template>
  <ListView
    :projects="projects" 
    list-title="Graphic Design" 
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
          url: '/jyj-golf',
          imageUrl: 'JYJ/JYJ-cover.jpg',
          title: 'JYJ Golf',
          subtitle: 'Brand'
        },
        {
          url: '/mer-fragrance',
          imageUrl: 'mer/mer-cover.jpg',
          title: '野人迷露',
          subtitle: 'Illustration'
        },
        {
          url: '/mer-fragrance',
          imageUrl: 'mer/mer-cover.jpg',
          title: 'Howdy',
          subtitle: 'Brand / Package'
        },
        {
          url: '/drk',
          imageUrl: 'drk/drk-cover.jpg',
          title: 'Dr.Korea',
          subtitle: 'Brand / Website'
        },
        {
          url: '/roastincoffee',
          imageUrl: 'roastin/roastin-cover.jpg',
          title: 'Roastin Coffee',
          subtitle: 'Brand / Package'
        },
        {
          url: '/instoapp',
          imageUrl: 'insto/insto-cover.jpg',
          title: 'insto',
          subtitle: 'Brand / App / Website'
        },
        {
          url: '/birdisland',
          imageUrl: 'birdisland/birdisland-cover.jpg',
          title: 'Bird Island',
          subtitle: 'Graphic'
        },
        {
          url: '/passion',
          imageUrl: 'passion/passion-cover.jpg',
          title: 'Passion',
          subtitle: 'Website'
        },
        {
          url: '/installments',
          imageUrl: 'installments/installments-cover.jpg',
          title: 'installments.com',
          subtitle: 'Brand / App / Website'
        },
        {
          url: '/main-stream-media',
          imageUrl: 'mainstream/main-stream-media-cover.jpg',
          title: 'Main Stream Media',
          subtitle: 'Graphic'
        },
        {
          url: '/lingo-wedding',
          imageUrl: 'lingo-wedding/lingo-cover-1.jpg',
          title: 'Lingo Wedding',
          subtitle: 'Brand'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

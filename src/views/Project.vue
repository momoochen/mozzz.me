<template>
  <ListView
    :projects="projects" 
    list-title="All Projects" 
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
        // {
        //   url: '',
        //   imageUrl: 'insto/insto-cover.jpg',
        //   title: 'Queenco',
        //   subtitle: 'App / Website'
        // },
        {
          url: '/roastincoffee',
          imageUrl: 'roastin/roastin-cover.jpg',
          title: 'Roastin Coffee',
          subtitle: 'Brand / Package'
        },
        {
          url: '/mer-fragrance',
          imageUrl: 'mer/mer-cover.jpg',
          title: 'mer Fragrance',
          subtitle: 'Brand / Package'
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
          url: '/instoapp',
          imageUrl: 'insto/insto-cover.jpg',
          title: 'insto',
          subtitle: 'Brand / App / Website'
        },
        {
          url: '/drk',
          imageUrl: 'drk/drk-cover.jpg',
          title: 'Dr.Korea',
          subtitle: 'Brand / Website'
        },
        {
          url: '/mechef',
          imageUrl: 'mechef/mechef-cover.jpg',
          title: 'Me Chef',
          subtitle: 'Brand / Website'
        },
        {
          url: '/insto-store',
          imageUrl: 'insto-store/insto-store-cover.jpg',
          title: 'INSTO Store',
          subtitle: 'Website'
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
          url: '/smart-light',
          imageUrl: 'smartlight/smartlight-cover.jpg',
          title: 'Smart Light',
          subtitle: 'App'
        },
        {
          url: '/winelyzer',
          imageUrl: 'winelyzer/winelyzer-cover.jpg',
          title: 'Winelyzer',
          subtitle: 'App'
        },
        {
          url: '/livehygro',
          imageUrl: 'livehygro/livehygro-cover.jpg',
          title: 'Live Hygro',
          subtitle: 'App'
        },
        {
          url: '/main-stream-media',
          imageUrl: 'mainstream/main-stream-media-cover.jpg',
          title: 'Main Stream Media',
          subtitle: 'Graphic'
        },
        {
          url: '/gopets',
          imageUrl: 'gopets/gopets-cover.jpg',
          title: 'Go Pets!',
          subtitle: 'App'
        },
        {
          url: '/lingo-wedding',
          imageUrl: 'lingo-wedding/lingo-cover-1.jpg',
          title: 'Lingo Wedding',
          subtitle: 'Brand'
        },
        {
          url: '/fju-art-gallery',
          imageUrl: 'fju/fju-cover.jpg',
          title: 'FJU Art Gallery',
          subtitle: 'Brand / Website'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

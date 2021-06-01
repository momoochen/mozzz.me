<template>
  <ListView
    :projects="projects" 
    list-title="UI Design" 
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
        //   url: '/mask-map',
        //   imageUrl: 'maskmap/maskmap-cover.jpg',
        //   title: 'Abiga',
        //   subtitle: 'Website / RWD'
        // },
        // {
        //   url: '/mask-map',
        //   imageUrl: 'maskmap/maskmap-cover.jpg',
        //   title: '科學生',
        //   subtitle: 'Website / RWD'
        // },
        {
          url: '/aibiga',
          imageUrl: 'abiga/abiga-cover.jpg',
          title: 'Aibiga',
          subtitle: 'Website'
        },
        {
          url: '/instoapp',
          imageUrl: 'insto/insto-cover.jpg',
          title: 'insto',
          subtitle: 'Brand / App / Website / RWD'
        },
        {
          url: '/mechef',
          imageUrl: 'mechef/mechef-cover.jpg',
          title: 'Me Chef',
          subtitle: 'Brand / Website / RWD'
        },
        {
          url: '/insto-store',
          imageUrl: 'insto-store/insto-store-cover.jpg',
          title: 'INSTO Store',
          subtitle: 'Website / RWD'
        },
        {
          url: '/fju-art-gallery',
          imageUrl: 'fju/fju-cover.jpg',
          title: 'FJU Art Gallery',
          subtitle: 'Brand / Website'
        },
        {
          url: '/passion',
          imageUrl: 'passion/passion-cover.jpg',
          title: 'Passion',
          subtitle: 'Website / RWD'
        },
        {
          url: '/installments',
          imageUrl: 'installments/installments-cover.jpg',
          title: 'installments.com',
          subtitle: 'Brand / App / Website / RWD'
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
          url: '/gopets',
          imageUrl: 'gopets/gopets-cover.jpg',
          title: 'Go Pets!',
          subtitle: 'App'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <header>
    <div id="header">
      <BaseTabs :tabs="tabs" />
    </div>
  </header>
</template>

<script>
import BaseTabs from '@/components/BaseTabs'
export default {
  components: {
    BaseTabs
  },
  data() {
    return {
      tabs: [
        {
          index: '0',
          title: 'UI',
          link: '/ui'
        },
        {
          index: '1',
          title: 'GRAPHIC',
          link: '/graphic'
        },
        {
          index: '2',
          title: 'CODING',
          link: '/coding'
        }
        // {
        //   index: '4',
        //   title: 'PROJECTS',
        //   link: '/projects'
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: -webkit-sticky;
  position: sticky;
  z-index: 999;
  top: 0;
  #header {
    position: absolute;
    height: auto;
    width: 100%;
    // box-shadow: 1px 2px 8px #d1d1d14f;
    // overflow: hidden;
  }
  #header::before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.65);
    filter: blur(8px);
    -webkit-filter: blur(8px);
    z-index: -1;
  }
}
</style>

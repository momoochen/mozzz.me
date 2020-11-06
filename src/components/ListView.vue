<template>
  <div id="listview">
    <div class="list__inner">
      <router-link 
        v-for="(project, index) in projects"  
        :key="index"
        :to= "project.url"
      >
        <div class="project">
          <img 
            :src="require(`../assets/imgs/${project.imageUrl}`)"
          >
          <div class="title-wrapper">
            <div class="project-title">
              {{ project.title }}
            </div>
            <div class="project-subtitle">
              {{ project.subtitle }}
            </div>
          </div>
        </div>
      </router-link>
    </div>
</div></template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    },
    listTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
#listview {
  padding-top: 100px;
  .list__inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 340px;
      height: 340px;
      overflow: hidden;
      position: relative;
      transition: all 1s ease-in-out;
      @media only screen and (max-width: 800px) {
        width: 50%;
      }
      @media only screen and (max-width: 500px) {
        width: 100%;
      }
    }
    .project {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 1s ease-in-out;
      cursor: pointer;
      &:hover {
        .title-wrapper {
          opacity: 1;
        }
        img {
          width: 80%;
        }
      }
      img {
        transition: all 1s ease-in-out;
        width: 66%;
        box-shadow: 4px 4px 20px #ddd;
        border-radius: 6px;
      }
      .title-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 340px;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        opacity: 0;
        transition: all 1s ease-in-out;
        background: #beac83;
      }
      .project-title {
        font-size: 20px;
        margin-bottom: 12px;
        color: white;
        cursor: pointer;
      }
      .project-subtitle {
        font-size: 13px;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>

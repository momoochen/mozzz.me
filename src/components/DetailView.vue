<template>
  <div id="detailview">
    <div id="about">
      <div class="maincover">
        <img
          :src="require(`../assets/imgs/${imageUrl}`)"
          class="maincover__image"
        />
      </div>
      <div class="container">
        <div class="container-wrapper">
          <div class="name">
            {{ projectTitle }}
          </div>
          <div class="time-tag">
            {{ projectDate }}
          </div>
          <div class="description">
            {{ projectText }}
          </div>
          <div class="skill-wrapper">
            <div
              v-for="(skill, index) in projectSkill"
              :key="index"
              class="skill"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(url, index) in projectImages" :key="index" class="gallery">
      <div class="gallery__wrapper">
        <img :src="require(`../assets/imgs/${url}`)" class="gallery__image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectTitle: {
      type: String,
      default: ''
    },
    projectText: {
      type: String,
      default: ''
    },
    projectSkill: {
      type: Array,
      default: () => []
    },
    projectDate: {
      type: String,
      default: ''
    },
    projectImages: {
      type: Array,
      default: () => []
    },
    imageUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
#detailview {
  padding-top: 68px;
}
#about {
  background: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    display: block;
  }

  .maincover {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    @media only screen and (max-width: 800px) {
      width: 100%;
      height: 400px;
    }
    @media only screen and (min-width: 801px) {
      width: 70%;
      min-width: 500px;
      height: 600px;
    }
  }

  .maincover__image {
    @media only screen and (max-width: 800px) {
      width: 300px;
      height: auto;
    }
    @media only screen and (min-width: 801px) {
      height: 400px;
      width: 400px;
    }
  }

  .container {
    background: rgb(250, 250, 250);
    width: 50%;
    height: 600px;
    padding: 50px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1024px) {
      padding: 80px 50px;
    }
    @media only screen and (max-width: 800px) {
      width: 100%;
      height: 300px;
      padding: 80px 50px;
    }
    .container-wrapper {
      display: flex;
      flex-direction: column;
    }
    .name {
      margin: 10px 0;
      font-size: 20px;
      cursor: default;
    }
    .description {
      padding: 10px 0 10px 0;
      font-size: 13px;
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;
      cursor: default;
    }
    .skill-wrapper {
      padding: 6px 0px;
      margin-top: 20px;
      cursor: default;
    }
    .skill {
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 2px;
      background: black;
      display: inline-block;
      margin-right: 6px;
      margin-top: 4px;
      cursor: default;
      color: white;
    }
    .time-tag {
      font-size: 12px;
      display: block;
      cursor: default;
    }
  }
}

.gallery {
  background-color: white;
  padding: 100px;
  &:nth-child(odd) {
    background-color: rgb(250, 250, 250);
  }
  @media only screen and (max-width: 500px) {
    padding: 60px;
  }
  @media only screen and (max-width: 400px) {
    padding: 20px;
  }
}

.gallery__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery__image {
  width: 600px;
  height: auto;
  margin: 0 auto;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 95%;
    height: auto;
  }
  @media only screen and (max-width: 400px) {
    width: 300px;
    height: auto;
  }
}
</style>

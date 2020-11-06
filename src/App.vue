<template>
  <div id="app">
    <div id="top-container">
      <div id="top">
        <router-link to="/">
          <div class="logo">
            <img src="./assets/imgs/logo.svg">
          </div>
        </router-link>
      </div>
      <!-- <div class="title">MOLLIE CHEN</div> -->
    </div>
    <BaseHeader />
    <transition name="slide-fade">
      <router-view />
    </transition>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader'
import BaseFooter from '@/components/BaseFooter'

export default {
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
}

.slide-fade-enter-active {
  transition: all 1s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.8s ease-in-out;
}

.slide-fade-enter {
  transform: translateY(100px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(200px);
  opacity: 0;
}

#top-container {
  position: relative;
  background-size: cover;
  width: 100%;
  height: auto;
  // overflow: hidden;
  z-index: 1;
}

#top {
  width: 100%;
  height: auto;
}

#top::before {
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

.logo {
  padding: 50px 0 20px 0;
  margin: 0 auto;
  text-align: center;
  img {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
}

.title {
  padding: 30px 0;
  color: black;
  font-size: 20px;
  text-align: center;
  letter-spacing: 20px;
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 18px;
  }
}
</style>

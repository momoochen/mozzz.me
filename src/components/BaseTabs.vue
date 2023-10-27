<template>
  <!-- id should be same as component object name -->
  <div id="BaseTabs">
    <div class="tabs">
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="tab.link"
        class="tab"
      >
        {{ tab.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    change(index) {
      this.selected = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: bottom;
  justify-content: center;
}

.tab {
  letter-spacing: 2px;
  font-size: 12px;
  color: black;
  width: 100px;
  cursor: pointer;
  margin-right: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  transition: all 0.5s ease-in-out;
  @media only screen and (max-width: 400px) {
    width: 66px;
    height: 60px;
    font-size: 12px;
    line-height: 60px;
  }
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    border-bottom: 4px solid black;
  }
}

a {
  text-decoration: none;
  &:focus {
    border-bottom: 4px solid black;
  }
}
</style>

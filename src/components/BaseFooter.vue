<template>
  <div class="footer-banner">
    <div class="social-media">
      <a href="https://www.facebook.com/momoochen" target="_blank">Facebook</a>
      <a href="https://www.linkedin.com/in/mollie-chen/" target="_blank">
        LinkedIn
      </a>
      <a href="https://github.com/momoochen" target="_blank">GitHub</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-banner {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  .social-media {
    display: flex;
  }
  a {
    text-decoration: none;
    display: flex;
    font-size: 12px;
    padding: 6px 12px;
    background: #000;
    color: white;
    margin-right: 6px;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #beac83;
      color: #000;
    }
  }
}
</style>

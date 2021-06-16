<template>
  <footer>
    <Logo />
    <a
      href="https://github.com/ParkYoungWoong"
      target="_blank">
      (c) {{ getYear }} HEROPY
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  },
  computed:{
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>
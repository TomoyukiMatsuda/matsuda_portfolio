<template>
  <div class="header">
    <a href="#" class="header__link" @click="clickScroll('#top')">トップ</a>
    <a href="#" class="header__link" @click="clickScroll('#aboutme')">アバウトミー</a>
    <a href="#" class="header__link" @click="clickScroll('#rails')">Ruby on Rails</a>
    <a href="#" class="header__link" @click="clickScroll('#javascript')">JavaScript(Vue.js)</a>
  </div>
</template>

<script>
export default {
  methods: {
    clickScroll(target) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(target),
        500,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  background-color: rgb(213, 255, 255);

  &__link {
    margin-right: 10px;
  }
}
</style>
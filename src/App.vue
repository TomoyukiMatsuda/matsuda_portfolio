<template>
  <div>
    <Header></Header>
    <Top></Top>
    <AboutMe></AboutMe>
    <Rails></Rails>
    <JavaScript></JavaScript>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Top from './components/Top.vue';
import AboutMe from './components/AboutMe.vue';
import Rails from './components/Rails';
import JavaScript from './components/JavaScript.vue';


import 'normalize.css'; // リセットCSS

export default {
components: {
  Header,
  Top,
  AboutMe,
  Rails,
  JavaScript,
}
}
</script>

<style lang="scss" scoped>
.container {
  height: 800px;
  padding-top: 70px;
}
</style>
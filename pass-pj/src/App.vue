<template>
  <div id="app">
    <header-comp></header-comp>
    <router-view></router-view>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from "@/components/common/HeaderComp.vue";
import FooterComp from "@/components/common/FooterComp.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->

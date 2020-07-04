<template>
  <div id="app">
    <Header />
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>-->
    <router-view />
    <Contact />
  </div>
</template>
<script>
import Header from "./components/includes/Header.vue";
import Contact from "./components/includes/Contact.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Contact
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

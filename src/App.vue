<template>
  <div id="application-frontpage-entry">
    <div class="container">
      <top-nav />
    </div>
    <router-view />
    <div class="container">
      <bottom-nav />
    </div>
  </div>
</template>

<script>
import TopNav from "./components/EndUser/Pages/assets/top-navigation";
import BottomNav from "./components/EndUser/Pages/assets/bottom-navigation";
export default {
  components: {
    TopNav,
    BottomNav
  }
};
</script>

<style lang="scss">
#application-frontpage-entry {
  height: 100%;
  width: 100%;
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

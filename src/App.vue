<template>
  <div
    class="main-data-container d-flex justify-content-between header"
    v-responsive="{ tiny: el => el.width < 400, small: el => el.width < 800 }"
  >
    <Layout />
    <router-view></router-view>
  </div>
</template>

<script>
import { ResponsiveDirective } from "vue-responsive-components";
import Layout from "./Layout";
export default {
  name: "app",
  components: { Layout },
  directives: {
    responsive: ResponsiveDirective
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
.split-right {
  height: 100%;
  width: 75%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
.centered-right {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
@media screen and (max-width: 550px) {
  .header {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
  }
}
</style>

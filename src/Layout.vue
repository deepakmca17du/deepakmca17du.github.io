<template>
  <div class="row">
    <div class="col-sm-3 d-flex justify-content-between sidenav-menu left">
      <ul>
        <li class="sidebar-title">
          <router-link class="nav-title" to="/" title="School Name">
            <span>School: XYZ</span>
          </router-link>
        </li>
        <!--v-bind:value="`class.${classname}`"-->
        <li class="sidebar-link" v-for="(classes, index) in instituteInfo">
          <router-link
            class="nav-link"
            :to="'/student-wise-report/' + `${index + 1}`"
          >
            <span>{{ classes.classname }}</span>
          </router-link>
        </li>
        <hr />
      </ul>
    </div>
    <div class="col-sm-9 d-flex justify-content-between"></div>
  </div>
</template>
<script>
import instituteInfo from "./classroom_data.json";
export default {
  name: "Layout",
  components: {},
  props: {},
  data: function() {
    return {
      instituteInfo
    };
  }
};
</script>

<style lang="scss">
.main-data-container {
  display: flex;
}
.sidenav-menu {
  position: fixed;
  height: 100%;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
.sidebar-title {
  padding-bottom: 5em;
}
.sidebar-link {
  padding-bottom: 3em;
}

.split-screen {
  display: grid;
  grid-template-columns: 25% 75%;
  background-color: #2196f3;
  padding: 10px;
}
.left {
  left: 0;
  background-color: #9370db;
}
/* Control the right side */
.right {
  right: 0;
  background-color: rgba(128, 128, 128, 0.425);
}
/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.nav-title {
  font-size: 1.5em;
  color: white;
  text-decoration: none;
}
.nav-link {
  font-size: 20px;
  color: white;
  text-decoration: none;
}
li {
  display: block;
  margin: 0;
  width: 280px;
  a {
    text-align: left;
    padding: 10px 35px;
    font-style: normal;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5em;
  }
}
</style>

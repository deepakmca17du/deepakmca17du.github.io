<template>
  <div class="split-right right header">
    <div class="centered-right">
      <h2>Select a Class</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.split-right {
  height: 100%;
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
</style>

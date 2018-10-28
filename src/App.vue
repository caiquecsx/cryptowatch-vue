<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: { }
};
</script>

<style>
  body {
    height: 100%;
    color: #e6e7eb;
    background-color: #381e67;
  }

  body .app{
    height: 100%;
  }
</style>

<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
	export default {
	  name: 'app'
	}
</script>

<style>


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
</style>

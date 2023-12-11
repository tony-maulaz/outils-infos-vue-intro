<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <img src="./assets/monimage.png" alt="Vue logo" style="width: 100px;"/>
  </div>
  <div id="div_link" class="mb-4">
    <router-link to="/">Home</router-link>
    <router-link to="/test">Comp</router-link>
    <router-link to="/test2">IF et FOR</router-link>
    <router-link to="/axios">Axios</router-link>
  </div>

  <router-view id="router_comp"></router-view>
  
</template>

<script setup>

</script>

<style scoped>
#router_comp {
  border: 1px solid red;
}

#div_link {
  display: flex;
  justify-content: space-around;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

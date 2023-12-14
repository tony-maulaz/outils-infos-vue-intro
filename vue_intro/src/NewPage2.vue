<template>
    <div>
      <h1 class="test">Nouvelle Page avec un composant</h1>

      <HelloWorld msg="Vite + Vue" />

      <router-link to="/">Aller à la page entrée</router-link>
    </div>
  </template>
  
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<style src="./monstyle.css"></style>
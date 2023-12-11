<template>
    <div>
      <h1>Bienvenue sur votre premier site Vue 3</h1>

      <v-text-field label="Label" v-model=textEnter></v-text-field>

      <v-btn @click="updateText">Changer le texte</v-btn>

      <p>le nouveau text : {{ newText }}</p>
      
      <router-link to="/test">Aller à la page avec comp</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const textEnter = ref('text initial')
  const newText = ref('')

  function updateText() {
    newText.value = textEnter.value
  }
  </script>
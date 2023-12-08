<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <v-btn type="button" @click="count++">count is {{ count }}</v-btn>
    <p>
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style scoped>
</style>

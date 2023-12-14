<template>
  <h2>Hello</h2>
  <h1>{{ msg }}</h1>

  <div class="card">
    <v-btn type="button" @click="increment">count is {{ count }}</v-btn>
    <p>
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['myEvent'])

defineProps({
  msg: {
    type: String,
    default: 'Hello World!',
    validator (value) {
      return value.length > 4
    }
  }
})

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log('count changed from', oldValue, 'to', newValue)
})

function increment () {
  count.value++
  if( count.value > 5 ) emit('myEvent', count.value)
}
</script>

<style scoped>
</style>

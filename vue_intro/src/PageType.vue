<template>
    <div class="maDiv">
        <h1>Welcome</h1>
        <p>{{ txt }}</p>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
const txt = ref('Hello World')

function updateText() {
    txt.value = 'Hello World'
}

</script>

<style scoped>
.maDiv {
    border: 1px solid blue;
    margin: 5px;
    width: 250px;
}
</style>


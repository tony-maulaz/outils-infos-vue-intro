<template>
    <div>
        <h1>Première requête</h1>

        <v-btn @click="load">Load</v-btn>

    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const data = ref()

function load() {
    axios.get('http://127.0.0.1:3000/api/test')
        .then(response => {
            const data = response.data
            console.log(data);
            console.log(data.name)
        })
        .catch(error => {
            console.error(error);
        });
}
</script>
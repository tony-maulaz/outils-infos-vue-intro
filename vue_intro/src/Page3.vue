<template>
    <div>
        <h1>Les if et for en Vue 3</h1>
        <v-btn @click="updateVisibility(true)">Visible</v-btn>
        <v-btn @click="updateVisibility(false)">Cacher</v-btn>

        <!-- le composant est supprimé du layout -->
        <p v-if="isVisible">Je suis visible</p>

        <!-- le composant garde sa place dans le layout -->
        <p :style="{ visibility: styleVisibility }">Je suis visible</p>


        <div style="height: 500px;">
            <h2>Les boucles</h2>
            <v-btn @click="updateLoop()">Update</v-btn>
            <v-btn @click="addLoop()">Add</v-btn>
            <v-btn @click="newData()">Load</v-btn>
            <ul style="height: 200px;">
                <li v-for="item in items" :key="item.id">{{ item.name }}</li>
            </ul>

            <div class="mt-4 d-flex flex-wrap">
                <div v-for="item in items" :key="item.id" class="item pa-2">
                    <div>Ici c'est un test : {{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';

const isVisible = ref(false)
const styleVisibility = ref('hidden')


const items = ref()

function updateVisibility(val) {
    isVisible.value = val
    if (val) {
        styleVisibility.value = 'visible'
    } else {
        styleVisibility.value = 'hidden'
    }
}

function updateLoop() {

    items.value.map((item) => {
        if (item.id % 2 === 0) {
            item.name = 'item ' + item.id + ' modifié'
        }
    })

    items.value[0].name = 'item 1 modifié'
}

function addLoop() {
    const lastId = items.value[items.value.length - 1].id
    items.value.push({ id: lastId + 1, name: 'item ' + (lastId + 1) })
}

function newData() {
    items.value = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Joe' },
        { id: 4, name: 'Jim'}
    ]
}

onMounted(() => {
    items.value = [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' },
    ]
})

</script>

<style scoped>
.item {
    border: 1px solid blue;
    margin: 5px;
    width: 250px;
}
</style>
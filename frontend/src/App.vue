<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';

const tasks = ref([]);
const newTaskContent = ref('');
const time = new Date().getHours();

onMounted(async () => {
  const response = await axios.get('/api/tasks');
  tasks.value = response.data.tasks;
});

const addTask = async () => {
  await axios.post('/api/tasks', { content: newTaskContent.value });
  window.location.reload();
}

const checkTask = async (id) => {
  await axios.delete('/api/tasks/'+id);
  window.location.reload();
}

</script>

<template>

  <h2 v-if="time < 12">Good morning ☀️</h2>
  <h2 v-if="time > 12 && time <= 19">Good evening 🌆</h2>
  <h2 v-if="time > 19">Good night 🌙</h2>
  <h2 v-if="tasks.length == 0">You have no tasks 😊</h2>

  <form @submit.prevent="addTask">
    <input v-model="newTaskContent" type="text" placeholder="Workout"/>
    <input type="submit" value="Add"/>
  </form>

  <div class="tasks">
    <div v-for="task in tasks" :key="task._id" class="task">
      <p>{{ task.content }}</p>
      <button @click="checkTask(task._id)">Check</button>
    </div>
  </div>

</template>
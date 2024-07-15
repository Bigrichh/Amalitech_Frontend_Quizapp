<template>
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: normal;
}

a{
  text-decoration: none;
  color: inherit;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue';
import { useQuizStore } from '@/stores/quizstore'; // Adjust the import path

export default defineComponent({
  name: 'App',

  created() {
    const quizStore = useQuizStore();
    quizStore.getSubjects();
  },
});
</script>
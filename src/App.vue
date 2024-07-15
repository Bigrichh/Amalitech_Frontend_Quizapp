<template>
  <!-- The RouterView component renders the matched component for the current route -->
  <RouterView />
</template>

<script lang="ts">
import { useQuizStore } from '@/stores/quizstore'; // Adjust the import path

export default {
  name: 'App',

  // Lifecycle hook called when the component is created
  created() {
    const quizStore = useQuizStore();// Access the quiz store
    quizStore.getSubjects();// Dispatch getSubjects action to fetch quiz subjects from data.json and store it in state
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: normal;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>

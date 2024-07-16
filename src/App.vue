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

/* Define your light and dark mode styles here */
.light-mode {
  --bg-color: #f4f6fa;
  --outercirclebg-color:#edf1f9;
  --scorecardbg-color:#ffffff;
  --text-color: #313e51;
  --headerp-color:#626c7f;
  --cardbg-color:#ffffff;
  --errortext-color:#ee5454;
}

.dark-mode {
  --bg-color: #313E51;
  --outercirclebg-color:#2D3949;
  --scorecardbg-color:#3B4D66;
  --text-color: #ffffff;
  --headerp-color:#ABC1E1;
  --cardbg-color:#3B4D66;
  --errortext-color:#F4F6FA;
}
</style>

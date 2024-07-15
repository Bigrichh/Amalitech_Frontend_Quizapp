import { defineStore } from 'pinia';
import data from "../../data.json"

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    subjects: [] as any[],
  }),
  actions: {
    getSubjects() {
      this.subjects = data.quizzes;
    }
  },
});
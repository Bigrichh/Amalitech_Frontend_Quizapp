import { defineStore } from 'pinia';
import data from "../../data.json"

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    subjects: [] as any[],
    toggled: false,
    theme: 'light-mode',
  }),

  actions: {
    getSubjects() {
      this.subjects = data.quizzes;
    },

    toggleTheme() {
      this.toggled = !this.toggled;
      this.theme = this.toggled ? 'dark-mode' : 'light-mode';
    },
  },

});
import { defineStore } from 'pinia';
import data from "../../data.json"

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    subjects: [] as any[],
    toggled: JSON.parse(localStorage.getItem('toggled') || 'false'),
    theme: localStorage.getItem('theme') || 'light-mode',
  }),

  actions: {
    getSubjects() {
      this.subjects = data.quizzes;
    },

    toggleTheme() {
      this.toggled = !this.toggled;
      this.theme = this.toggled ? 'dark-mode' : 'light-mode';
      localStorage.setItem('theme', this.theme); // Save theme to local storage
      localStorage.setItem('toggled', this.toggled); // Save theme to local storage
    },
  },

});
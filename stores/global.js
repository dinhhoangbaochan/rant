import { defineStore } from 'pinia';

export const useGlobalStates = defineStore('global', {
  state: () => ({
    isDarkMode: false
  }),

  actions: {
    setDarkMode(mode) {
      this.isDarkMode = mode;
    },
    changeMode() {
      this.isDarkMode = ! this.isDarkMode;
      localStorage.setItem('is-dark-mode', this.isDarkMode);
    },
  }
});
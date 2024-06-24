import { defineStore } from 'pinia';

export const useGlobalStates = defineStore('global', {
  state: () => ({
    isDarkMode: true,
  }),

  actions: {
    changeMode() {
      this.isDarkMode = ! this.isDarkMode;
    },
  }
});
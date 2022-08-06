import { reactive } from 'vue'

export const store = reactive({
  viewMode: false,
  toggleMode() {
    store.viewMode = !store.viewMode;
  }
});
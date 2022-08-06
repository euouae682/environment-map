import { reactive } from 'vue'

export const store = reactive({
  viewMode: true,
  toggleMode() {
    store.viewMode = !store.viewMode;
  }
});
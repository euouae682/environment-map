import { reactive } from 'vue'

/* The current global state manager for the project */
export const store = reactive({
    /* `viewMode`: determines whether display is light or dark mode */
    viewMode: false,
    /* `showOptions`: determines whether the options panel is shown */
    showOptions: false,
    toggleOptions() {
        store.showOptions = !store.showOptions;
    },
    /* `showMore`: determines whether the moreInfo panel is shown */
    showMore: false
});
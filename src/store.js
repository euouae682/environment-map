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
    showMore: false,
    /* `showModal`: determines whether the pop-up after a country is clicked is shown */
    showModal: false
});
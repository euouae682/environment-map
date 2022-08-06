import { reactive } from 'vue'

/* The current global state manager for the project */
export const store = reactive({
    /* `viewMode`: determines whether display is light or dark mode */
    viewMode: false,
    /* `showMore`: determines whether the moreInfo panel is shown */
    showMore: false
});
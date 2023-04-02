import { writable} from "svelte/store";




export const showModal = writable(false);
export const layout = writable('top');
export const carousel = writable(false);
export const hero = writable(false);
export const message = writable('');
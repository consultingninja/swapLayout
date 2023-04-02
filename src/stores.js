import { writable} from "svelte/store";


export const layout = writable('top');

export const showModal = writable(false);

export const carousel = writable(false);
export const hero = writable(false);
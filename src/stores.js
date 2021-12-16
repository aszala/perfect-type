import { writable } from 'svelte/store';

export const promptIndex = writable(0);
export const wordsToDisplay = writable(10);

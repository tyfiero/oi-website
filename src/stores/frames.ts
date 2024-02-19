import { writable } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';

export const totalFrames = writable(180);
export const freeFrames = writable(180);

export const currentFrame = persisted('currentFrame', null);

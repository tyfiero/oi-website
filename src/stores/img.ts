import { writable } from 'svelte/store';
import { derived } from 'svelte/store';

export const imgUrl = writable('/1.png');

export const fileNumber = derived(imgUrl, ($imgUrl) => {
	const matches = $imgUrl.match(/\/(\d+)\.png$/);
	return matches ? matches[1] : null;
});

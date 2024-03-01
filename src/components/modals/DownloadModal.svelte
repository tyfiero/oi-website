<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { closeModal } from './svelte-modals/modalsStore';
	import { fileNumber, imgUrl } from '../../stores/img';
	import { availableFrames, displayPicker, displayedFrame } from '../../stores/frames';
	import Guidelines from './Guidelines.svelte';

	export let isOpen = true;
</script>

{#if isOpen}
	<div
		role="dialog"
		class="transition-fade pointer-events-none fixed inset-0 z-[500] flex items-center justify-center"
		transition:fade|global
	>
		<div
			class="pointer-events-auto relative flex h-[75vh] w-[60vw] min-w-[240px] flex-col justify-between overflow-auto rounded-[6px] bg-neutral-900 px-12 py-6"
		>
			<button
				class="absolute right-2 top-2 cursor-default rounded-full p-2 transition hover:bg-neutral-100 dark:hover:bg-neutral-700"
				on:click|preventDefault={() => closeModal()}
			>
				<Icon
					icon="fa-solid:times"
					class="h-6 w-6 text-neutral-500 transition hover:text-neutral-700"
				/>
			</button>

			<div class="flex w-full flex-col items-center justify-center">
				<h1 class="mb-4 text-xl font-bold text-white">Thank you for helping us launch the 01!</h1>
				<Guidelines />
			</div>

			<section class="mb-8">
				<div class="flex w-full items-center justify-center">
					<a
						href={$imgUrl}
						download={$displayedFrame + '.jpg'}
						target="_blank"
						rel="noopener noreferrer"
						on:click={() => {
							displayPicker.set(false);
							closeModal();
						}}
						class="z-50 h-min cursor-pointer border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
					>
						Download Frame
					</a>
				</div>
			</section>
		</div>
	</div>
{/if}

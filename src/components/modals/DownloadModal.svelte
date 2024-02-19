<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { closeModal } from './svelte-modals/modalsStore';
	import { fileNumber, imgUrl } from '../../stores/img';

	export let isOpen = true;

</script>

{#if isOpen}
	<div
		role="dialog"
		class="transition-fade pointer-events-none fixed inset-0 z-[500] flex items-center justify-center"
		transition:fade|global
		
	>
		<div
						class="pointer-events-auto relative flex h-[45vh] w-[60vw] min-w-[240px] flex-col justify-between overflow-auto rounded-[6px] px-12 py-6 bg-black"
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

			<div class="w-full flex flex-col items-center justify-center">
				<h1 class="mb-4 text-3xl font-bold text-white">Rules</h1>
				<ol class="list-decimal space-y-2 text-white">
					<li>Frame MUST be human generated, no AI.</li>
					<li>...</li>
					<li>...</li>
				</ol>
			</div>

			<section class="mb-8">

			<div class="flex w-full items-center justify-center">  
					<a href={$imgUrl} download={$fileNumber + ".png"} class="h-min z-50 border cursor-pointer border-white px-3 py-2 transition text-white hover:bg-white hover:text-black">
						Download Frame
					</a>
			</div>
			</section>
		</div>
	</div>
{/if}

<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { closeModal } from './svelte-modals/modalsStore';
	import { fileNumber } from '../../stores/img';
	import { currentFrame } from '../../stores/frames';

	export let isOpen = true;
	let base64FileData = '';
	let frameToUpload = 1;
	let message = '';
	async function convertToBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result.toString());
			reader.onerror = error => reject(error);
		});
	}

	async function handleFileChange(event) {
		const file = event.target.files[0];
		if (file) {
			console.log("FILE ADDED");
			
			base64FileData = await convertToBase64(file);
			navigator.clipboard.writeText(base64FileData).then(() => {
				console.log("Base64 data copied to clipboard");
			}, (err) => {
				console.error('Could not copy text: ', err);
			});
			console.log("FILE CONVERTED TO BASE64");

			message = `Frame added: ${file.name}`;
			
		}
	}

	async function uploadFrame() {
		message = `Uploading...`;

		const response = await fetch('/api/upload', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				base64FileData,
				fileNumber: $currentFrame,
			}),
		});
		const data = await response.json();
		console.log(data);

		if(data.status === "success"){
			console.log("FILE UPLOADED");
			message = `Frame uploaded!`;
		}else{
			console.log("FILE NOT UPLOADED");
			message = `Error uploading frame, please try again.`;
		}
		// closeModal();
	}
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
				class="absolute right-2 top-2 cursor-default rounded-full p-2 transition hover:bg-neutral-700 group"
				on:click|preventDefault={() => closeModal()}
			>
				<Icon
					icon="fa-solid:times"
					class="h-6 w-6 text-neutral-500 transition group-hover:text-white"
				/>
			</button>

			<h1 class="mb-4 text-3xl font-bold text-white">Upload Frame</h1>

			<section class="mb-8">
				<input type="number" class="mb-4" bind:value={frameToUpload}>
				<input type="file" accept=".jpg,.jpeg,.png" on:change={handleFileChange} class="mb-4">

				<p class="text-white text-lg text-center">{message}</p>
				<div class="flex w-full items-center justify-center">
					<button on:click={uploadFrame} class="h-min z-50 border cursor-pointer border-white px-3 py-2 transition text-white hover:bg-white hover:text-black">Upload Frame</button>
				</div>
			</section>
		</div>
	</div>
{/if}

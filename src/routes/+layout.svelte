<script>
	import { fade } from 'svelte/transition';
	import Modals from './../components/modals/svelte-modals/Modals.svelte';
	import './styles.css';
	import { closeModal, openModal } from '../components/modals/svelte-modals/modalsStore';
	import DownloadModal from '../components/modals/DownloadModal.svelte';
	import UploadModal from '../components/modals/UploadModal.svelte';
	import ImgPicker from '../components/imgPicker.svelte';

</script>

<svelte:head>
	<title>The 01 Video Project</title>

	<meta property="og:title" content="The Open Interpreter Project" />
	<meta property="og:image" content="https://openinterpreter.com/assets/thumbnail.jpg" />
	<meta
		property="og:description"
		content="Open Interpreter is a free, open-source code interpreter."
	/>
	<meta property="og:url" content="https://openinterpreter.com" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Open Interpreter Project" />
	<meta
		name="twitter:description"
		content="Open Interpreter is a free, open-source code interpreter."
	/>
	<meta name="twitter:image" content="https://openinterpreter.com/assets/thumbnail.jpg" />
</svelte:head>
<main>

<nav class="w-full h-20 bg-black/90 flex items-center justify-between px-5 fixed top-0 z-50">

	<div class="flex items-center space-x-4">
		<!-- <div class="h-5 w-5 rounded-full bg-white saturate-200"></div> -->
		<!-- <div class="hidden text-xl text-white md:block">Open Interpreter</div> -->

					<p class="text-white">We need your help hand making frames for the launch video</p>
				</div>
				<div class="flex items-center space-x-4 z-10">
					<button on:click={()=>{
						openModal(DownloadModal, null, {replace: true});
					}} class="h-min z-50 border cursor-pointer border-white px-3 py-2 transition text-white hover:bg-white hover:text-black">Download Frame</button>
					<button on:click={()=>{
						openModal(UploadModal, null, {replace: true});
					}} class="h-min z-50 border cursor-pointer border-white px-3 py-2 transition text-white hover:bg-white hover:text-black">Upload Frame</button>
				</div>
				
		
		
	</nav>
	<slot />
	<ImgPicker />

</main>
<Modals>
	<div
		slot="backdrop"
		class="backdrop"
		role="button"
		tabindex="-1"
		on:click={closeModal}
		transition:fade
		on:keydown|preventDefault={(event) => {
			if (event.key === 'Escape') {
				closeModal();
			}
		}}
	/>
</Modals>
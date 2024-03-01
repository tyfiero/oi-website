<script>
	import { fade } from 'svelte/transition';
	let loaded = false; // Tracks if the image has loaded
</script>

<!-- LEFT SIDE (CONSUMER) -->
<div class="flex w-full flex-col md:w-1/2">
	<!-- SECTION 1 -->
	<div class="flex w-full flex-col pt-20 md:flex-row">
		<!-- LEFT -->
		<div class="w-full">
			<h1 class="text-center text-5xl">01 Light</h1>
		</div>
	</div>
	<!-- SECTION 2 -->
	<div class="flex h-[26rem] w-full flex-col md:h-[43rem] md:flex-row">
		<!-- LEFT -->
		<div class="w-full">
			<div class=" w-full">
				<img
					on:load={() => {
						loaded = true;
					}}
					class="h-auto w-full -translate-y-20 {loaded ? 'fade-fast' : 'opacity-100'}"
					src="/hand.png"
					alt="01 light"
				/>
			</div>
		</div>
		<!-- </div> -->
	</div>
	<!-- SECTION 3 -->
	<div class="z-50 mb-10 flex w-full flex-col md:flex-row">
		<!-- LEFT -->
		<div class="w-full">
			<p class="text-center">Limited stock of 100 units, order now</p>
			<div class="flex w-full justify-center px-5">
				<a
					class="z-5 mt-4 h-min cursor-pointer rounded-full border border-black px-6 py-2 text-xl text-black transition hover:bg-black hover:text-white"
					href="https://0ggfznkwh4j.typeform.com/to/UvODRiEO"
					target="_blank"
					rel="noopener noreferrer">Pre-Order</a
				>
			</div>
		</div>
	</div>
</div>

<script>
	import Nav from './../components/01light/Nav.svelte';
</script>

<svelte:head>
	<title>The Open Interpreter Project</title>

	<meta property="og:title" content="The Open Interpreter Project" />
	<meta property="og:image" content="https://openinterpreter.com/og.png" />
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
	<meta name="twitter:image" content="https://openinterpreter.com/og.png" />
</svelte:head>
<div
	class="relative h-screen cursor-default bg-white invert selection:bg-black selection:text-white"
>
	<video
		class="pointer-events-none absolute left-1/2 top-1/2 -z-10 max-h-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover opacity-[12%] invert"
		autoplay
		loop
		muted
		playsinline
		poster="/assets/s.jpg"
	>
		<source
			src="https://neyguovvcjxfzhqpkicj.supabase.co/storage/v1/object/sign/video/sizzle.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlby9zaXp6bGUubXA0IiwiaWF0IjoxNzExMDg2MTQyLCJleHAiOjIwMjY0NDYxNDJ9.3JVnG2HPYYu3H8AG-UA9BczndcEaAnpCwjI8xq7RtBA&t=2024-03-22T05%3A42%3A22.888Z"
			type="video/mp4"
		/>
		Your browser does not support the video tag.
	</video>
	<div class="invert">
		<Nav />
	</div>
	<section class="z-10 h-screen pb-24 sm:pb-0">
		<div id="hero" class="flex h-full flex-col justify-end p-6 sm:p-12">
			<div class="mb-4 text-5xl font-light sm:w-auto sm:text-7xl md:max-w-4xl">
				<div>A new way<br />to use computers</div>
			</div>
			<span class="mb-6 text-xl font-light"
				>Open Interpreter lets LLMs run code on your computer to complete tasks.</span
			>

			<div class="flex flex-wrap justify-between text-lg">
				<!-- Container for the two left buttons -->
				<div class="mb-4 mr-4 flex items-center space-x-6 md:mb-0">
					<a
						href="https://github.com/KillianLucas/open-interpreter/"
						class="h-min rounded-md border border-black px-2 py-1 hover:bg-black hover:text-white"
						>★ 49K Github</a
					>
					<a
						href="https://twitter.com/OpenInterpreter/status/1770821439458840846"
						class="flex h-min items-center space-x-1 border-b border-black hover:border-transparent"
					>
						<span>Watch 01 video</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1"
							stroke="currentColor"
							class="h-5 w-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
							></path>
						</svg>
					</a>
				</div>

				<!-- Right button -->
				<a
					href="https://0ggfznkwh4j.typeform.com/to/G21i9lJ2"
					target="_blank"
					rel="noopener noreferrer"
					class="h-min rounded-md border border-black px-2 py-1 hover:bg-black hover:text-white"
					>Get early access to the Desktop App</a
				>
			</div>
		</div>
	</section>
</div>

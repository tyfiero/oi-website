<script>
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import SvelteSeo from 'svelte-seo';
	let loaded = false; // Tracks if the image has loaded
</script>

<SvelteSeo
	title="01 Light"
	description="An Open Source Operating System with a LLM in the driver seat. A foundation for the next generation of AI devices."
	canonical="https://openinterpreter.com/01"
	keywords="01OS, operating system, code interpreter, open source, programming, development"
	openGraph={{
		title: '01OS',
		description:
			'An Open Source Operating System with a LLM in the driver seat. A foundation for the next generation of AI devices.',
		url: 'https://openinterpreter.com/01',
		type: 'website',
		images: [
			{
				url: 'https://openinterpreter.com/assets/thumbnail.png',
				width: 1200,
				height: 627,
				alt: 'Open Interpreter Thumbnail'
			}
		],
		site_name: 'Open Interpreter'
	}}
	twitter={{
		card: 'summary_large_image',
		title: '01OS',
		description:
			'An Open Source Operating System with a LLM in the driver seat. A foundation for the next generation of AI devices.',
		image: 'https://openinterpreter.com/assets/thumbnail.png'
	}}
/>

<div class="relative flex min-h-screen flex-col">
	<div class="absolute left-0 top-0 -z-10 h-full w-1/2 bg-white"></div>
	<div class="absolute right-0 top-0 -z-10 hidden h-full w-1/2 bg-black md:block"></div>

	<!-- SECTION 1 -->
	<div class="flex w-full flex-col pt-20 md:flex-row">
		<!-- LEFT -->
		<div class="w-full md:w-1/2">
			<h1 class="text-center text-5xl">01 Light</h1>
		</div>
		<!-- RIGHT -->
		<div class="w-full md:w-1/2">
			<h1 class="text-center text-5xl text-white">Developer Community</h1>
		</div>
	</div>

	<div class="flex w-full flex-col md:flex-row">
		<!-- LEFT -->
		<div class="w-full md:w-1/2">
			<div class="h-[40rem] w-full">
				<img
					in:fade={{ duration: 400 }}
					on:load={() => {
						loaded = true;
					}}
					class="h-auto w-full {loaded ? 'fade-fast' : 'opacity-100'}"
					src="/hand.png"
					alt="01 light"
				/>
			</div>
		</div>
		<!-- RIGHT -->
		<div class="w-full px-10 pt-10 md:w-1/2">
			<div class="flex w-full justify-center">
				<p class=" text-white">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero doloremque sit nulla
					molestiae minus iste nam suscipit aspernatur facere numquam magnam, accusamus repellendus.
					Quis eum possimus exercitationem nesciunt est? Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Deserunt repellat blanditiis architecto est ut magni quaerat eum fugit
					sapiente. Voluptatem excepturi debitis natus vero! Quos facere maxime amet quam similique!
				</p>
			</div>

			<h2 class="mt-10 text-3xl text-white">Guides</h2>
			<div class="flex w-full items-center gap-4">
				<a
					href="https://github.com/KillianLucas/01"
					class="z-5 group relative mt-4 flex max-w-[16rem] cursor-pointer flex-col gap-1 border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
				>
					<h3 class="text-lg font-semibold">Hardware</h3>
					<p class="text-sm">Everything you need to build an 01 Light in an afternoon</p>
					<Icon
						icon="ci:arrow-up-right-md"
						class="absolute right-1 top-1 h-6 w-6  text-white group-hover:text-black"
					/>
				</a>
				<a
					href="https://github.com/KillianLucas/01"
					class="z-5 group relative mt-4 flex h-full max-w-[16rem] cursor-pointer flex-col gap-1 border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
				>
					<h3 class="text-lg font-semibold">Software</h3>
					<p class="text-sm">Get 01OS up and running on a variety of devices in no time</p>
					<Icon
						icon="ci:arrow-up-right-md"
						class="absolute right-1 top-1 h-6 w-6  text-white group-hover:text-black"
					/>
				</a>
			</div>
		</div>
	</div>
	<div class="flex w-full flex-col md:flex-row">
		<!-- LEFT -->
		<div class="w-full md:w-1/2">
			<p class="text-center">Limited stock of 100 units, order now</p>
			<div class="flex w-full justify-center px-5">
				<a
					class="z-5 mt-4 h-min cursor-pointer rounded-full border border-black px-3 py-2 text-black transition hover:bg-black hover:text-white"
					href="https://0ggfznkwh4j.typeform.com/to/UvODRiEO"
					target="_blank"
					rel="noopener noreferrer">Pre-Order</a
				>
			</div>
		</div>
		<!-- RIGHT -->
		<div class="w-full md:w-1/2">
			<div class="flex w-full flex-col items-end justify-end px-5">
				<div class="w-fit">
					<p class=" text-white">Community</p>
					<div class=" flex items-center justify-center gap-4">
						<a
							class="z-5 mt-4 flex h-min cursor-pointer items-center gap-2 border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
							href="https://discord.gg/Hvz9Axh84z"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon icon="ic:round-discord" class="h-5 w-5" /> Discord
						</a>
						<a
							class="z-5 mt-4 flex h-min cursor-pointer items-center gap-2 border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
							href="https://github.com/KillianLucas/01"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon icon="fa:github" class="h-5 w-5" /> Github
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

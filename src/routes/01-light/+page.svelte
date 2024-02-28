<script>
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import SvelteSeo from 'svelte-seo';
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

<div class="flex h-screen flex-col !overflow-hidden lg:flex-row">
	<div class="relative w-full flex-1 overflow-y-auto lg:w-1/2">
		<div class="absolute top-20 flex w-full items-center justify-center">
			<h1 class="text-center text-5xl">01 Light</h1>
		</div>
		<div class="h-[40rem] w-full">
			<img
				in:fade={{ duration: 400 }}
				class="fade-fast h-auto w-full"
				src="/hand.png"
				alt="01 light"
			/>
		</div>
		<div class="flex w-full justify-center">
			<a
				class="z-5 mt-4 h-min cursor-pointer rounded-full border border-black px-3 py-2 text-black transition hover:bg-black hover:text-white"
				href="https://0ggfznkwh4j.typeform.com/to/UvODRiEO"
				target="_blank"
				rel="noopener noreferrer">Pre-Order</a
			>
		</div>
	</div>
	<div class="relative w-full flex-1 overflow-y-auto bg-black lg:w-1/2">
		<h1 class="my-40 text-center text-5xl text-white">Join the Developer Community</h1>

		<div class="flex w-full items-center justify-center gap-4">
			<a
				class="z-5 mt-4 flex h-min cursor-pointer items-center gap-2 border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
				href="https://discord.gg/Hvz9Axh84z"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon icon="ic:round-discord" class="h-5 w-5" /> Join the Community
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

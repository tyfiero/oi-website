<script>
	import BentoGrid from './../components/bento/BentoGrid.svelte';
	import { goto, pushState } from '$app/navigation';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="01OS"
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
<div class="relative h-screen cursor-default bg-black selection:bg-black selection:text-white">
	<!-- <nav class="mb-10 flex h-20 w-full items-center justify-between bg-black/90 px-5">
		<a href="/" class="flex items-center gap-2">
			<div class="h-5 w-5 rounded-full bg-white saturate-200"></div>
			<div class="hidden text-xl text-white md:block">01</div></a
		>
		<div class="flex items-center space-x-4">
			<a
				class="z-50 h-min cursor-pointer border border-transparent px-3 py-2 text-white transition hover:border-white"
				href="/frames">Video Frame</a
			>

			<a
				class="z-50 h-min cursor-pointer border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
				href="https://0ggfznkwh4j.typeform.com/to/UvODRiEO"
				target="_blank"
				rel="noopener noreferrer">Preorder</a
			>
		</div>
	</nav> -->
	<BentoGrid />
</div>

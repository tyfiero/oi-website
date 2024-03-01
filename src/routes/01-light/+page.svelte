<script>
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import SvelteSeo from 'svelte-seo';
	import Dev from '../../components/01light/DEV.svelte';
	import Consumer from '../../components/01light/Consumer.svelte';
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

<div class="flex h-full flex-col">
	<!-- <div class="absolute left-0 top-0 -z-10 h-full w-1/2 bg-white"></div>
	<div class="absolute right-0 top-0 -z-10 hidden h-full w-1/2 bg-black md:block"></div> -->
	<div class="relative flex min-h-screen flex-col md:flex-row">
		<Consumer />
		<Dev />
	</div>

	<div class="w-full flex-col">
		<!-- <div class="h-96 w-full bg-white"></div>
		<div class="h-96 w-full bg-white"></div>
		<div class="h-96 w-full bg-white"></div>
		<div class="h-96 w-full bg-black"></div> -->
	</div>
</div>

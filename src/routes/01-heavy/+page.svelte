<script>
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="01 Heavy"
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
<div class="container mx-auto px-4">
	<!-- Hero Section -->
	<div class="hero mt-10 overflow-hidden rounded-lg bg-gray-200">
		<img
			src="/heavy.jpg"
			alt="01 Heavy"
			class="h-full w-full object-cover"
			style="height: 500px;"
		/>
		<div class="py-8 text-center">
			<h1 class="mb-3 text-4xl font-bold text-gray-800">01 Heavy</h1>
			<p class="mb-5 text-gray-600">The future of personal AI computing</p>
			<a href="#" class="rounded-md bg-neutral-600 px-6 py-3 font-semibold text-white shadow-lg"
				>Preorder Now</a
			>
		</div>
	</div>

	<!-- Feature Tiles -->
	<div class="my-10 grid grid-cols-1 gap-4 md:grid-cols-3">
		<div class="feature-tile rounded-lg bg-white p-6 shadow-lg">
			<h2 class="mb-2 text-xl font-semibold">Powerful AI Performance</h2>
			<p>Run large language models locally with unprecedented speed and efficiency.</p>
		</div>
		<div class="feature-tile rounded-lg bg-white p-6 shadow-lg">
			<h2 class="mb-2 text-xl font-semibold">Seamless Connectivity</h2>
			<p>Easily connects with 01 Light and other devices for a seamless user experience.</p>
		</div>
		<div class="feature-tile rounded-lg bg-white p-6 shadow-lg">
			<h2 class="mb-2 text-xl font-semibold">Privacy Focused</h2>
			<p>All computations are done locally to ensure your data remains private and secure.</p>
		</div>
	</div>

	<!-- Description Paragraph -->
	<div class="description rounded-lg bg-gray-200 p-6 shadow-lg">
		<p class="text-gray-600">
			The 01 Heavy redefines what's possible in personal computing with AI. Designed for those who
			demand the best in AI performance, privacy, and connectivity, the 01 Heavy is a small computer
			that runs local large language models, powering an advanced AI assistant. Whether you're a
			developer, creator, or enthusiast, the 01 Heavy offers unparalleled capabilities in a compact
			and efficient package. Preorder now to be among the first to experience the next generation of
			AI computing.
		</p>
	</div>
</div>

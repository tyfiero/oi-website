<script>
	import Icon from '@iconify/svelte';
	import BentoUnit from './BentoUnit.svelte';
</script>

<div class="relative z-0 grid h-full grid-cols-1 overflow-y-auto md:grid-cols-4 md:grid-rows-3">
	<div class="group relative h-full w-full md:row-span-2">
		<BentoUnit href="/01" url="" alt="01 Light" title="O1 Light">
			<div class="absolute left-6 top-4 flex items-center gap-2">
				<div class="h-5 w-5 rounded-full bg-white saturate-200"></div>
				<div class="hidden text-2xl text-white md:block">01</div>
			</div>
		</BentoUnit>
	</div>
	<div class="group relative md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-1">
		<BentoUnit href="/" targetBlank url="/" alt="01OS CD" title="News" />
	</div>
	<div class="group relative md:col-span-2 md:col-start-2 md:row-start-3">
		<BentoUnit href="https://discord.gg/Hvz9Axh84z" url="/" alt="Community" title="Community" />
	</div>
	<div class="md:ol-start-4 group relative md:row-start-3">
		<BentoUnit href="/" url="" alt="01OS CD" title="01OS" />
	</div>
	<div class="group relative md:col-start-1 md:row-start-3">
		<BentoUnit href="/" url="" alt="01OS Heavy" title="01OS" />
	</div>
	<div class="group relative md:col-start-2 md:row-start-1">
		<BentoUnit
			href="https://github.com/KillianLucas/aifs"
			url=""
			alt="AIFS"
			title="AI Filesystem"
		/>
	</div>
	<div class="group relative md:col-start-2 md:row-start-2">
		<BentoUnit href="https://openinterpreter.com/" url="" alt="01OS CD" title="Open Interpreter" />
	</div>
</div>

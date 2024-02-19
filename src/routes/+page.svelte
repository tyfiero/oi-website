<script>
import { fileNumber, imgUrl } from "../stores/img";
import { goto, pushState } from '$app/navigation';

import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { currentFrame, totalFrames } from "../stores/frames";

onMount(async () => {
	// let number = $page.url.searchParams.get('frame')
	// console.log(number);
	// if(number){
	// 	console.log("FRAME NUMBER SET");
	// 	currentFrame.set(parseInt(number))
	// 	imgUrl.set("https://neyguovvcjxfzhqpkicj.supabase.co/storage/v1/object/public/video-files/pre/" + number + ".png")
	// }

	if($currentFrame){
		console.log("FRAME NUMBER SET");
		imgUrl.set("https://neyguovvcjxfzhqpkicj.supabase.co/storage/v1/object/public/video-files/pre/" + $currentFrame + ".png")
	}else{
	
	const response = await fetch('/api/get-all', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				});

		const { data: uploadedFrames } = await response.json();
		const availableFrames = Array.from({ length: $totalFrames }, (_, i) => i + 1).filter(frame => !uploadedFrames.includes(frame.toString()));
		console.log(availableFrames);

		const randomFrame = availableFrames[Math.floor(Math.random() * availableFrames.length)];
		console.log(randomFrame);

		currentFrame.set(randomFrame);
		// $page.url.searchParams.set('frame', randomFrame.toString());
		// goto('?' + $page.url.searchParams.toString(), { replaceState: true });
	}
	})
</script>

<div
	class="relative h-screen cursor-default bg-white selection:bg-black selection:text-white"
>

	<section class="z-10 h-full">

		<div id="hero" class="flex h-full flex-col justify-end p-6 sm:p-12">
		
			<img src={$imgUrl} alt="Frame" on:error={() => console.log('Error loading image')}>
		</div>
	</section>

</div>

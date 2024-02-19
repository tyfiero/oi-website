<script>
	// import Icon from "@iconify/svelte";
	import { currentFrame, totalFrames } from "../stores/frames";
    
</script>


<div class=" fixed bottom-0 left-0 right-0 flex items-center justify-center pb-2 transition duration-500 {$totalFrames ? 'opacity-100' : 'opacity-0'}">

    <button class="px-4 py-1 bg-white border border-black w-fit  transition flex gap-2 items-center">
     <!-- <button on:click={() => {
        if($currentFrame > 1){
            currentFrame.set($currentFrame - 1)
        }
     }}>
     </button> -->
     <!-- <Icon
     icon="fa-solid:caret-left"
     class="h-6 w-6 text-black"
     /> -->

       <p class="select-none"> {$currentFrame} / {$totalFrames}</p>
        <!-- <button on:click={() => {
            if($currentFrame <  $totalFrames){
                currentFrame.set($currentFrame + 1)
            }
         }}>
            <Icon
            icon="fa-solid:caret-right"
            class="h-6 w-6 text-black"
            />
        </button> -->
    </button>
</div>


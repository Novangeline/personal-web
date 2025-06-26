<script>
	import AboutPreview from '$lib/components/About.svelte';
	import ProjectsTab from '$lib/components/Projects.svelte';
	import Journey from './Journey.svelte';
	import Gallery from './Gallery.svelte';
	import { fade } from 'svelte/transition';

	let activeTab = 'about';
</script>

<div class="mt-4 mb-4 flex justify-center gap-4">
	<button
		on:click={() => (activeTab = 'about')}
		class="rounded-full bg-[#e6d8c7] px-4 py-2 text-sm
      font-medium transition
      hover:bg-[#d6c5b1] md:text-base
      {activeTab === 'about' ? 'ring-2 ring-[#a0764b]' : ''}"
	>
		About
	</button>

	<button
		on:click={() => (activeTab = 'projects')}
		class="rounded-full bg-[#e6d8c7] px-4 py-2 text-sm
      font-medium transition
      hover:bg-[#d6c5b1] md:text-base
      {activeTab === 'projects' ? 'ring-2 ring-[#a0764b]' : ''}"
	>
		Projects
	</button>

	<button
		on:click={() => (activeTab = 'journey')}
		class="rounded-full bg-[#e6d8c7] px-4 py-2 text-sm
      font-medium transition
      hover:bg-[#d6c5b1] md:text-base
      {activeTab === 'journey' ? 'ring-2 ring-[#a0764b]' : ''}"
	>
		Journey
	</button>

	<button
		on:click={() => (activeTab = 'gallery')}
		class="rounded-full bg-[#e6d8c7] px-4 py-2 text-sm
        font-medium transition
        hover:bg-[#d6c5b1] md:text-base
        {activeTab === 'gallery' ? 'ring-2 ring-[#a0764b]' : ''}"
	>
		Gallery
	</button>
</div>

<div class="mx-auto w-full max-w-4xl px-6 py-8 text-left">
	{#key activeTab}
		{#if activeTab === 'about'}
			<div in:fade>
				<AboutPreview />
			</div>
		{:else if activeTab === 'projects'}
			<div in:fade>
				<ProjectsTab />
			</div>
		{:else if activeTab === 'journey'}
			<div in:fade>
				<Journey />
			</div>
		{:else if activeTab === 'gallery'}
			<div in:fade>
				<Gallery />
			</div>
		{/if}
	{/key}
</div>

<script>
	let imagesLoaded = false;

	// Preload all images
	async function preloadImages(imageList) {
		await Promise.all(
			imageList.map(
				(img) =>
					new Promise((resolve) => {
						const i = new Image();
						i.src = img.src;
						i.onload = resolve;
						i.onerror = resolve;
					})
			)
		);
		imagesLoaded = true;
	}

	export let images = [
		{ src: '/concert.jpg', alt: 'Concert night' },
		{ src: '/fisherman-coop.JPG', alt: 'Fisherman Coop view' },
		{ src: '/goc.JPG', alt: 'GOC snapshot' },
		{ src: '/golf.jpg', alt: 'Golf fun day' },
		{ src: '/kitkat.JPG', alt: 'Kitkat treat' },
		{ src: '/matcha-cheesecake.jpg', alt: 'Matcha cheesecake' },
		{ src: '/salmon.jpg', alt: 'Yummy salmon' },
		{ src: '/sauls.jpg', alt: 'Sauls moment' },
		{ src: '/snow.jpg', alt: 'Snowy scenery' },
		{ src: '/teddy-lookout.jpg', alt: "Teddy's Lookout" },
		{ src: '/bebek.jpg', alt: 'Crispy Bebek Dish' },
		{ src: '/grape.JPG', alt: 'Fresh Grapes' },
		{ src: '/warung-cahaya.jpg', alt: 'Warung Cahaya vibes' },
		{ src: '/bakso.jpg', alt: 'Bakso with sambal' },
	];

	preloadImages(images);
</script>

{#if !imagesLoaded}
	<!-- Splash screen -->
	<section class="flex min-h-screen flex-col items-center justify-center bg-[#fdf6ec] text-[#a0764b]">
		<img src="/cat.gif" alt="Loading..." class="w-40 h-40 mb-6" />
		<p class="text-xl font-medium animate-pulse">Loading memories... 🐾</p>
	</section>
{:else}
	<!-- Gallery Section -->
	<section class="min-h-screen bg-[#fdf6ec] px-6 py-12 text-center text-gray-800 transition-all duration-700 ease-out animate-fade-in">
		<h1 class="mb-4 text-3xl font-bold">The World Through My Lens 📸</h1>
		<p class="mx-auto mb-10 max-w-xl text-lg font-light">
			A small collection of moments, moods, and memories that shape how I see the world 🌍✨
		</p>
		<div
			class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 opacity-0 translate-y-5 animate-slide-in"
		>
			{#each images as image}
				<img
					src={image.src}
					alt={image.alt}
					class="h-64 w-full rounded-lg object-cover shadow-md transition duration-300 ease-in-out hover:scale-105"
				/>
			{/each}
		</div>
	</section>
{/if}

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slide-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.8s ease-out forwards;
	}

	.animate-slide-in {
		animation: slide-in 1s ease-out forwards;
	}
</style>

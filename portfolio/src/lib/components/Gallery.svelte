<script>
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
    { src: "/teddy-lookout.jpg", alt: "Teddy's Lookout" },
    { src: "/bebek.jpg", alt: "Crispy Bebek Dish" },
    { src: "/grape.JPG", alt: "Fresh Grapes" },
    { src: "/warung-cahaya.jpg", alt: "Warung Cahaya vibes" },
    { src: "/bakso.jpg", alt: "Bakso with sambal" },
	];
</script>

<section class="min-h-screen bg-[#fdf6ec] px-6 py-12 text-center text-gray-800">
	<h1 class="mb-4 text-3xl font-bold">The World Through My Lens 📸</h1>
	<p class="mx-auto mb-10 max-w-xl text-lg font-light">
		A small collection of moments, moods, and memories that shape how I see the world 🌍✨
	</p>
	<div class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
		{#each images as image}
			<img
				src={image.src}
				alt={image.alt}
				class="h-64 w-full rounded-lg object-cover shadow-md transition duration-300 ease-in-out hover:scale-105"
			/>
		{/each}
	</div>
</section>

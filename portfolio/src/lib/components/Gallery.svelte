<script>
    export let images = [];
  </script>
  
  <section class="min-h-screen bg-[#fdf6ec] text-gray-800 px-6 py-12 text-center">
    <h1 class="text-3xl font-bold mb-4">The World Through My Lens 📸</h1>
    <p class="text-lg max-w-xl mx-auto font-light mb-10">
      A small collection of moments, moods, and memories that shape how I see the world 🌍✨
    </p>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {#each images as img}
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src={img} alt="personal photo" class="rounded-xl shadow-md object-cover" />
      {/each}
    </div>
  </section>
  
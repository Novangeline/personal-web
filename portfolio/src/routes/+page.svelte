<script>
	import { Github, Linkedin } from 'lucide-svelte';
	import ProfileTabs from '$lib/components/ProfileTabs.svelte';
</script>

<div
	class="grid h-screen grid-cols-1 overflow-hidden bg-gradient-to-b from-[#fdf6ec] via-[#f5eee0] to-[#f3e9da] lg:grid-cols-[1fr_3fr_1fr]"
>
	<!-- Left Column -->
	<div class="relative hidden lg:block">
		<img
			src="/backdrop.jpg"
			alt="Backdrop"
			class="pointer-events-none absolute top-0 left-0 h-full w-full object-cover opacity-30"
		/>
	</div>

	<!-- Center Column (scrollable) -->
	<div class="z-10 overflow-y-auto px-4 py-12 text-center text-gray-800">
		<!-- Profile Section in Horizontal Layout -->
		<div class="mb-8 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
			<!-- Profile Image on the Left -->
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img
				src="/me.jpg"
				alt="Photo of Novangeline"
				class="h-48 w-48 rounded-full border-4 border-[#e6d8c7] object-cover shadow-md"
			/>

			<!-- Text Content on the Right -->
			<div class="text-left">
				<h1 class="mb-4 text-5xl font-extrabold">Novangeline Santoso</h1>

				<p class="mb-6 max-w-xl text-lg font-light">
					Software Engineer | Computer Science @ Monash Uni
				</p>

				<p class="mb-6 max-w-xl text-lg font-light italic">
					Nothing feels better than finding a bug you've been seeking for days!
				</p>

				<!-- Links -->
				<div
					class="flex flex-col items-start gap-4 text-base font-semibold text-[#a0764b] sm:flex-row"
				>
					<a
						href="https://github.com/novangeline"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 transition hover:text-[#8e6840]"
					>
						<Github size={18} class="text-[#a0764b]" />
						GitHub ↗
					</a>

					<span class="hidden sm:inline">·</span>

					<a
						href="https://linkedin.com/in/novangeline-santoso"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 transition hover:text-[#8e6840]"
					>
						<Linkedin size={18} class="text-[#a0764b]" />
						LinkedIn ↗
					</a>
				</div>
			</div>
		</div>

		<ProfileTabs />
	</div>

	<!-- Right Column -->
	<div class="relative hidden lg:block">
		<img
			src="/backdrop.jpg"
			alt="Backdrop"
			class="pointer-events-none absolute top-0 left-0 h-full w-full object-cover opacity-30"
		/>
	</div>
</div>

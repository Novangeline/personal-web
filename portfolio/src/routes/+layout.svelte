<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	
	let { children } = $props();

	onMount(() => {
		const splash = document.getElementById('splash-screen');
		if (splash) {
			splash.style.opacity = '0';
			setTimeout(() => splash.remove(), 500); // Match transition duration
		}
	});
</script>

{@render children()}

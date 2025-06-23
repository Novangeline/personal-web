<script>
	const projects = [
		{
			title: 'Budget Management App',
			timeline: 'June 2025 – Present',
			tech: 'Next.js, ReactJS, TailwindCSS, Supabase, TypeScript, JavaScript',
			type: 'Passion Project',
			desc: [
				'Developed a full-stack app to track, visualize, and manage personal spending with editable expense entries.',
				'Implemented interactive charts to view spending by month and year, integrated Supabase for real-time backend updates.'
			]
		},
		{
			title: 'Monash Stories',
			timeline: 'Jan 2025 – June 2025',
			tech: 'Unity, C#, Jira, Agile (Scrumban)',
			type: 'Associated with Monash University',
			desc: [
				'Collaborated to develop a game simulating student life at Monash, using Unity and C# for gameplay mechanics.',
				'Contributed to the coding team and designed multiple game levels focused on user engagement and challenge balance.',
				'Used Jira to track progress and practiced Scrumban methodology to manage team workflows and sprints.'
			]
		},
		{
			title: 'Personal Portfolio Website',
			timeline: 'Sep 2024 – Dec 2024',
			tech: 'Svelte, Node.js, TypeScript, JavaScript',
			type: 'Passion Project',
			desc: [
				'Built a personal website to showcase academic, technical, and career milestones, with a clean and responsive interface.',
				'Developed the frontend with Svelte and TypeScript; integrated Node.js backend for content management.'
			]
		},
		{
			title: 'Package Delivery Management App',
			timeline: 'Jul 2024 – Oct 2024',
			tech: 'AngularJS, Bootstrap, Node.js, Mongoose, TypeScript, JavaScript',
			type: 'Associated with Monash University',
			desc: [
				'Built a Progressive Web App for managing packages and driver assignments using AngularJS and Bootstrap.',
				'Designed a scalable backend using Node.js and Mongoose for efficient data handling, styled for responsiveness.',
				'Supported both TypeScript and JavaScript to enhance flexibility and maintain long-term maintainability.'
			]
		}
	];
</script>

<div class="space-y-8 px-4">
	{#each projects as project}
		<div class="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
			<div class="mb-2 text-xl font-semibold text-[#a0764b]">{project.title}</div>
			<div class="text-sm text-gray-600 italic">{project.timeline} &middot; {project.type}</div>
			<div class="mt-2 text-sm font-medium text-gray-700">Tech stack: {project.tech}</div>
			<ul class="mt-3 list-inside list-disc space-y-1 text-sm text-gray-800">
				{#each project.desc as line}
					<li>{line}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

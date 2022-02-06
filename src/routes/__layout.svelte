<script>
	import '../tailwind.css';
	export let origin = ''
</script>
<script context="module">
	import { REPO_URL } from '$lib/siteConfig';
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ url }) {
		return {
			props: {
				origin: url.origin
			}
		};
	}
</script>

<main class="flex flex-col justify-center bg-gray-50 dark:bg-gray-900">
	<slot />
	<footer class="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
		<hr class="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
		<!-- <div class="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"> -->
		<div class="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
			<div class="flex flex-col space-y-4">
				<a class="text-gray-500 hover:text-gray-300 transition" href="/">Home</a><a
					class="text-gray-500 hover:text-gray-300 transition"
					href="/about">About</a
				>
			</div>
			<div class="flex flex-col space-y-4">
				<a
					class="text-gray-500 hover:text-gray-300 transition"
					target="_blank"
					rel="noopener noreferrer"
					href="https://twitter.com/swyx">Twitter</a
				><a
					class="text-gray-500 hover:text-gray-300 transition"
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/alexnakagawa">GitHub</a
				>
			</div>
			<!-- <div class="flex flex-col space-y-4">
			<a class="text-gray-500 hover:text-gray-600 transition" href="/uses">Uses</a><a
				class="text-gray-500 hover:text-gray-600 transition"
				href="/guestbook">Guestbook</a
			><a class="text-gray-500 hover:text-gray-600 transition" href="/snippets">Snippets</a><a
				class="text-gray-500 hover:text-gray-600 transition"
				href="/tweets">Tweets</a
			>
		</div> -->
		</div>
	</footer>
</main>

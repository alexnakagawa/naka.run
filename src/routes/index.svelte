<script context="module">
	import { SITE_URL, REPO_URL } from '$lib/siteConfig';
</script>

<script>
	import ArrowDown from "../components/ArrowDown.svelte";

	// meta tags
	let Title = 'Alex Nakagawa';
	let Description = "Alex Nakagawa's Digital Garden";
	let ogImage =
		'https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png';
</script>

<svelte:head>
	<title>{Title}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/api/rss.xml'} />
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={Title} />
	<meta name="Description" content={Description} />
	<meta property="og:description" content={Description} />
	<meta property="og:image" content={ogImage} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="https://twitter.com/swyx/" />
	<meta name="twitter:title" content={Title} />
	<meta name="twitter:description" content={Description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<section id="intro">
	<div class="grid grid-cols-12 gap-4 my-4">
		<div class="col-start-4 col-end-6 text-gray-500">
			<div class="flex align-bottom">
				<div class="align-bottom">
					<ArrowDown />
				</div>
			</div>
		</div>
		<div class="col-start-6 col-end-11 text-gray-200">
			<h1 class="text-5xl py-4">
				Software engineer, digital craftsman, technology optimist
			</h1>
			<p class="text-2xl mb-3 bg-slate-50 bg-opacity-10 p-3 rounded-md text-center">
				I work for the LA Clippers building web tools and products for the coaches and front office staff.
			</p>
			<p class="text-xl">
				More on the About page
			</p>
		</div>
	</div>
</section>

<section id="projects">
	<div class="grid grid-cols-12 gap-4 my-4">
		<div class="col-start-4 col-end-6 text-gray-200 text-xl">
			RECENT PROJECTS
		</div>
	</div>
	<div class="grid grid-cols-12 gap-4 my-4">
		<div class="col-start-6 col-end-11 text-gray-200">
			this is where the projects will go
		</div>
	</div>
</section>

<section id="ideas">
	<div class="grid grid-cols-12 gap-4 my-4">
		<div class="col-start-4 col-end-6 text-gray-200 text-xl">
			SELECTED IDEAS
		</div>
	</div>
	<div class="grid grid-cols-12 gap-4 my-4">
		<div class="col-start-6 col-end-11 text-gray-200">
			this is where the posts will go
		</div>
	</div>
</section>

<style>
	h1 {
		font-family: 'Roboto', sans-serif
	}
</style>
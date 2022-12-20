<script>
	import video from '$lib/data/video.json';
	import gallery from '$lib/data/gallery.json';
</script>
<svelte:head>
	<title>{gallery.title}</title>
	<meta name="description" content={gallery.description} />
<meta content={gallery.title} property='og:title'/>
<meta content='https://www.fiverr.com/creativitas/create-your-custom-website-and-app' property='og:author'/>
<meta content={gallery.title} name='facebook:title'/>
<meta content='website' property='og:type'/>
<meta content='https://www.facebook.com/mesinkasircomplete' property='facebook:author'/>
<meta content={gallery.title} property='og:site_name'/>
<meta content={gallery.description} property='facebook:description'/>
<meta content='summary_large_image' name='twitter:card'/>
<meta content='https://twitter.com/hockeycomp' property='twitter:author'/>
<meta content='@hockeycomp' name='twitter:site'/>
<meta content={gallery.description} name='twitter:description'/>
<meta content={gallery.title} name='twitter:title'/>
<meta content={gallery.title} name='keywords'/>
<meta content='index, follow' name='robots'/>
</svelte:head>

<div class="container">
<div class="row">

<div class="col-md-12 p-3 p-md-5 text-center">
	<h1><strong><a href="/gallery">{gallery.title}</a></strong></h1>
	<h2>{gallery.description}</h2>
</div>

	{#each video as { title,video }}
<div class="col-md-4 p-3 mb-3">
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/{video}" 
	class="rounded" title={title}}
	loading="lazy" allowfullscreen></iframe>
</div>
	<h3 class="p-3"><a href="/" title={title}>{title}</h3>
</div>
		{/each}


</div>

</div>


<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import content from '$lib/data/home.json';
	import limo from '$lib/images/limousinewebsite.svg';
	import limodesign from '$lib/images/designwebsite.svg';
	import Header from './design/home/Header.svelte';
	import Section from './design/home/Section.svelte';
	import Tech from './design/home/Tech.svelte';
	import Deploy from './design/home/Deploy.svelte';
</script>

<svelte:head>
	<title>{content.title}</title>
	<meta name="description" content="{content.description}" />
<meta content={content.title} property='og:title'/>
<meta content='https://www.fiverr.com/creativitas/create-your-custom-website-and-app' property='og:author'/>
<meta content={content.title} name='facebook:title'/>
<meta content='website' property='og:type'/>
<meta content='https://www.facebook.com/mesinkasircomplete' property='facebook:author'/>
<meta content={content.title} property='og:site_name'/>
<meta content={content.description} property='facebook:description'/>
<meta content='summary_large_image' name='twitter:card'/>
<meta content='https://twitter.com/hockeycomp' property='twitter:author'/>
<meta content='@hockeycomp' name='twitter:site'/>
<meta content={content.description} name='twitter:description'/>
<meta content={content.title} name='twitter:title'/>
<meta content={content.title} name='keywords'/>
<meta content='index, follow' name='robots'/>
</svelte:head>

<section class="container">

<Header/>
<Section/>
<Tech/>
<Deploy/>
</section>

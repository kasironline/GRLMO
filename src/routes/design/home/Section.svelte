<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import content from '$lib/data/home.json';
	import limodesign from '$lib/images/designwebsite.svg';
</script>
<div class="row">
<div class="col-md-12 p-3 p-md-5">
<h3 class="text-center p-3"><strong><a href="/" title={content.title}{content.concept}>{content.concept}</a></strong></h3>
</div>
<div class="col-md-5 p-3">
 <img alt={content.title} class="img-fluid sket" src={limodesign}
width="100%" height="100%"/>
</div>
<div class="col-md-7 p-3">
<div class="p-3 bg-light rounded mb-3">
<p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-camera p-1 bg-dark text-white rounded" viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
<title>{content.title}{content.information}</title></svg> <strong><a href="/">{content.design}</a></strong></p>
<p>{content.information}</p>
</div>
<div class="p-3 bg-light rounded">
<p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-code-slash p-1 bg-dark text-white rounded" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
<title>{content.title}{content.programatic}</title></svg> <strong><a href="/">{content.program}</a></strong></p>
<p>{content.programatic}</p>
</div>
</div>
</div>
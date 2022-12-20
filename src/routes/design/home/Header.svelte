<script>;
	import content from '$lib/data/home.json';
	import limo from '$lib/images/limousinewebsite.svg';
</script>
<div class="row">
<div class="col-md-5 p-3 p-md-5">
<h1><strong><a href="/" title={content.title}>{content.title}</a></strong></h1>
<h2>{content.description}</h2>
<p>{content.info}</p>
<a href={content.testlink} class="btn btn-outline-dark">{content.test}</a>
</div>
<div class="col-md-7 p-3 p-md-5">
 <img alt={content.title} src={limo} class="img-fluid"
width="100%" height="100%"/>
</div>
</div>
<script>
	import { page } from '$app/stores';
	import limo from '$lib/images/grandlimousine.svg';
	import content from '$lib/data/home.json';
	import widget from '$lib/data/widget.json';
</script>
<div class="container-fluid">
<header class="row">
<div class="col-md-4 col-5 p-3 p-md-5 text-center">
<p><strong><a href="/" title={widget.title} class="tipis">{widget.title}</a></strong> <img alt={widget.title} src={limo}
width="25%" height="25%"/></p>
</div>
<nav class="nav col-md-8 col-7 p-3 p-md-5 justify-content-end">
<a class="nav-link tipis" title={widget.title}{widget.home} href={widget.link1}>{widget.home}</a>
<a class="nav-link tipis" title={widget.title}{widget.gallery} href={widget.link2}>{widget.gallery}</a>
<a class="nav-link tipis" title={widget.title}{widget.about} href={widget.link3}>{widget.about}</a>
</nav>
</header>
</div>

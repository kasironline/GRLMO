<script>
	import content from '$lib/data/home.json';
	import Dep1 from '../../design/home/Dep1.svelte';
	import Dep2 from '../../design/home/Dep2.svelte';
</script>
<div class="row">
<div class="col-md-12 p-3 p-md-5">
<h3 class="text-center p-3"><strong><a href="/" title={content.deploy}{content.title}>{content.deploy}</a></strong></h3>
</div>
<Dep1/>
<Dep2/>
</div>
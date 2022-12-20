<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import './grandlimousine.css';
</script>

<div class="app">
	<Header />
<main>
<slot />
</main>
<Footer />
</div>

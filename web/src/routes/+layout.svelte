<script>
	import SignIn from '$lib/components/custom/sign-in.svelte';
	import '../app.pcss';
</script>

<nav
	class="sticky top-0 flex w-full items-center justify-between px-10 py-5 shadow-sm backdrop-blur-md"
>
	<div class="flex items-center gap-2">
		<a href="/" class="pr-5 font-bold">Store Web</a>
		<a href="/">Beranda</a>
		<a href="/product">Produk</a>
	</div>
	<div>
		<SignIn />
	</div>
</nav>
<slot />

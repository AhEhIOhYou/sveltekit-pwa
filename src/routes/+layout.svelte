<script lang="ts">
	import '../styles/styles.scss';
	import Header from '@/lib/components/Header.svelte';
</script>


<Header />
<main>
	<div class="size-ruler">
		<slot />
	</div>
</main>

<style lang="scss">
	.size-ruler {
		position: relative;
		max-width: 1160px;
		margin: 70px auto 60px;
		border-radius: 2px;
		min-height: calc(100vh - 228px);
		padding: 0 45px;
	}
</style>

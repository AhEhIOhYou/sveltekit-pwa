<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content="{data.description}" />
</svelte:head>

<div class="container">
	<h1 class="title">
		Hello from the {data.title} page!
	</h1>
	<div class="tile-list">
		{#each data.items as item}
			<div class="tile-list__item">
				<img src="{item.img}" alt="img" />
				<div class="tile-list__item__text">{item.text}</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.tile-list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 2px;
		margin-top: 20px;

		@media (max-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 480px) {
			grid-template-columns: 1fr;
		}

		.tile-list__item {
			background-color: var(--white);
			border-radius: 3px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			overflow: hidden;
			transition: all 0.2s ease-in-out;
			position: relative;

			&:hover {
				transform: translateY(-5px);
			}

			.tile-list__item__text {
				position: absolute;
				bottom: 0;
				padding: 10px 10px;
				max-height: 50%;
				width: 100%;
				opacity: 0;
				transition: all 0.2s ease-in-out;
				color: var(--white);
				font-size: 1.3rem;
				background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 100%);
				text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
				word-break: break-word;
			}

			&:hover .tile-list__item__text {
				opacity: 1;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>

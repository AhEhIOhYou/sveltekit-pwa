<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="error-page">
	<div class="error-page__container">
		<h1 class="error-page__container__text">{$page.status}: {$page.error?.message}</h1>
	</div>
</div>

<style lang="scss">
	.error-page {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80vh;
		width: 100%;
		background-color: var(--white);
		border-radius: 5px;

		.error-page__container {
			text-align: center;

			.error-page__container__text {
				font-size: 2rem;
				font-weight: 600;
				color: var(--black);
			}
		}
	}

</style>
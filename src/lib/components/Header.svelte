<script lang="ts">
	let navEleemnts = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'About',
			link: '#'
		},
		{
			name: 'Contact',
			link: '#'
		},
		{
			name: 'Test',
			link: '/test'
		}
	];
</script>

<header class="header">
	<div class="nav-wrapper">
		<div class="logo">
			<img src="/favicon.png" alt="logo" />
		</div>
		<nav class="nav-container">
			<ul>
				{#each navEleemnts as navElement}
					<li>
						<a href={navElement.link}>{navElement.name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: 50px;
		margin: 0 auto;
		display: block;
		background-color: var(--white);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		padding: 0 15px;

		.nav-wrapper {
			max-width: 1160px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
			width: 100%;
			margin: 0 auto;

			.logo {
				height: 45px;
				width: 45px;
			}

			.nav-container {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				height: 50px;
				width: 100%;
				ul {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					height: 100%;
					width: 100%;
					li {
						list-style: none;
						margin: 0 10px;
						a {
							text-decoration: none;
							color: var(--black);
							font-size: 1.2rem;
							&:hover {
								color: var(--primary);
							}
						}
					}
				}
			}
		}
	}

	@media (max-width: 480px) {
		header {
			.nav-wrapper {
				.nav-container {
					ul {
						display: none;
					}
				}
			}
		}
	}
</style>

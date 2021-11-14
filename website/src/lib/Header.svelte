<script>
	import { page } from '$app/stores';
</script>

<header id="header-wrap">
	<!-- Navbar Start -->
	<nav class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<a href="index.html" class="navbar-brand"
				><img src="img/logo.png" alt="" style="width: 150px;" /></a
			>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarCollapse"
				aria-controls="navbarCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i class="lni-menu" />
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav mr-auto w-100 justify-content-end clearfix">
					<li class="nav-item active">
						<a class="nav-link" sveltekit:prefetch href="/"> Home </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" sveltekit:prefetch href="#services"> Servizi </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" sveltekit:prefetch href="#team"> Team </a>
					</li>
					<!-- <li class="nav-item">
			  <a class="nav-link" href="#pricing">
				Pricing
			  </a>
			</li> -->
					<li class="nav-item hide" />
					<li class="nav-item">
						<a class="nav-link" sveltekit:prefetch href="#contact"> Contatti </a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

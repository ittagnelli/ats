<script>
	import servizi from './servizi.json';
</script>

{#each servizi as servizio}
	<div class="col-md-6 col-lg-4 col-xs-12">
		<div class="services-item wow fadeInRight" data-wow-delay="0.3s">
			<div class="icon">
				<i class={servizio.icon} />
			</div>
			<div class="services-content">
				<h3><a href="/about">{servizio.nome}</a></h3>
				<p>
					{@html servizio.descrizione}
				</p>
			</div>
		</div>
	</div>
{/each}

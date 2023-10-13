<script context="module">
	import { log_access } from "$lib/js/firebase";
	import Servizi from '$lib/components/servizi/servizi.svelte';

	export const prerender = true;

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- Hero Area Start -->
<div id="hero-area" class="hero-area-bg">
	<div class="container">      
	  <div class="row">
		<div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
		  <div class="contents">
			<h2 class="head-title">Agnelli Tech Shop</h2>
			<p id="homeclaim">
				Il centro assistenza computer e smartphone dell'Agnelli gestito dagli studenti dall'indirizzo Informatico.
				ATS è aperto a tutti gli studenti e alle loro famiglie. Risolve i principali problemi legati all'uso del PC/Laptop e degli Smartphone.
				<br />Visita il nostro sito, scopri i servizi messi a disposizione e vieni a trovarci.
				<br />Ti aspettiamo!
			</p>
			<!-- <div class="header-button">
			  <a href="#" class="btn btn-common">Download Now</i></a>
			  <a href="#" class="btn btn-border video-popup">Learn More</i></a>
			</div> -->
		  </div>
		</div>
		<div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
		  <div class="intro-img">
			<img class="img-fluid" src="img/intro-mobile.png" alt="">
		  </div>            
		</div>
	  </div> 
	</div> 
  </div>
  <!-- Hero Area End -->

  	<section id="services" class="section-padding">
		<div class="container">
			<div class="section-header text-center">
				<h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">I Nostri Servizi</h2>
				<div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
			</div>
			<div class="row">
				<Servizi />

			</div>
		</div>
	</section>

  <!-- About Section start -->
  <!-- <div class="about-area section-padding bg-gray">
	<div class="container">
	  <div class="row">
		<div class="col-lg-6 col-md-12 col-xs-12 info">
		  <div class="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
			<div>
			  <div class="site-heading">
				<p class="mb-3">Manage Statistics</p>
				<h2 class="section-title">Detailed Statistics of your Company</h2>
			  </div>
			  <div class="content">
				<p>
				  Praesent imperdiet, tellus et euismod euismod, risus lorem euismod erat, at finibus neque odio quis metus. Donec vulputate arcu quam. Morbi quis tincidunt ligula. Sed rutrum tincidunt pretium. Mauris auctor, purus a pulvinar fermentum, odio dui vehicula lorem, nec pharetra justo risus quis mi. Ut ac ex sagittis, viverra nisl vel, rhoncus odio. 
				</p>
				<a href="#" class="btn btn-common mt-3">Read More</a>
			  </div>
			</div>
		  </div>
		</div>
		<div class="col-lg-6 col-md-12 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
		  <img class="img-fluid" src="img/about/img-1.png" alt="" >
		</div>
	  </div>
	</div>
  </div> -->
  <!-- About Section End -->

  <!-- Features Section Start -->
  <!-- <section id="features" class="section-padding">
	<div class="container">
	  <div class="section-header text-center">          
		<h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Awesome Features</h2>
		<div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
	  </div>
	  <div class="row">
		<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
		  <div class="content-left">
			<div class="box-item wow fadeInLeft" data-wow-delay="0.3s">
			  <span class="icon">
				<i class="lni-rocket"></i>
			  </span>
			  <div class="text">
				<h4>Bootstrap 4 Based</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			  </div>
			</div>
			<div class="box-item wow fadeInLeft" data-wow-delay="0.6s">
			  <span class="icon">
				<i class="lni-laptop-phone"></i>
			  </span>
			  <div class="text">
				<h4>Fully Responsive</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			  </div>
			</div>
			<div class="box-item wow fadeInLeft" data-wow-delay="0.9s">
			  <span class="icon">
				<i class="lni-cog"></i>
			  </span>
			  <div class="text">
				<h4>HTML5, CSS3 & SASS</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
			  </div>
			</div>
		  </div>
		</div>
		<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
		  <div class="show-box wow fadeInUp" data-wow-delay="0.3s">
			<img src="img/feature/intro-mobile.png" alt="">
		  </div>
		</div>
		<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
		  <div class="content-right">
			<div class="box-item wow fadeInRight" data-wow-delay="0.3s">
			  <span class="icon">
				<i class="lni-leaf"></i>
			  </span>
			  <div class="text">
				<h4>Modern Design</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
			  </div>
			</div>
			<div class="box-item wow fadeInRight" data-wow-delay="0.6s">
			  <span class="icon">
				<i class="lni-layers"></i>
			  </span>
			  <div class="text">
				<h4>Multi-purpose Template</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			  </div>
			</div>
			<div class="box-item wow fadeInRight" data-wow-delay="0.9s">
			  <span class="icon">
				<i class="lni-leaf"></i>
			  </span>
			  <div class="text">
				<h4>Working Contact Form</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </section> -->
  <!-- Features Section End -->   

  <!-- Team Section Start -->
  <section id="team" class="section-padding bg-gray">
	<div class="container">
	  <div class="section-header text-center">          
		<h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">ATS Team</h2>
		<div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
	  </div>
	  <div class="row">
		<div class="col-lg-6 col-md-12 col-xs-12">
		  <!-- Team Item Starts -->
		  <div class="team-item wow fadeInRight" data-wow-delay="0.2s">
			<div class="team-img">
			  <img id="avatar-img0" class="img-fluid" src="img/team/avatar-cellini.png" alt="" width="143">
			</div>
			<div class="contetn">
			  <div class="info-text">
				<h3 id="avatar-nome0"><a href="#">Marco Cellini</a></h3>
				<p id="avatar-ruolo0">Software Assistant</p>
			  </div>
			  <p id="avatar-desc0">Marco è come te, pieno di domande. Ora però sarà pronto a darti una risposta!</p>
			  <ul class="social-icons">
				<!-- <li><a href="#"><i class="lni-facebook-filled" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li> -->
				<!-- <li><a href="#"><i class="lni-instagram-filled" aria-hidden="true"></i></a></li> -->
			  </ul>
			</div>
		  </div>
		  <!-- Team Item Ends -->
		</div>
		<div class="col-lg-6 col-md-12 col-xs-12">
		  <!-- Team Item Starts -->
		  <div class="team-item wow fadeInRight" data-wow-delay="0.4s">
			<div class="team-img">
			  <img id="avatar-img1" class="img-fluid" src="img/team/avatar-licciardino.png" alt="" width="143">
			</div>
			<div class="contetn">
			  <div class="info-text">
				<h3 id="avatar-nome1"><a href="#">Matteo Licciardino</a></h3>
				<p id="avatar-ruolo1">Hardware Assistant</p>
			  </div>
			  <p id="avatar-desc1">Calmo, gentile e disponibile. Ti aiuterà a risolvere le tue problematiche HW.</p>
			  <ul class="social-icons">
				<!-- <li><a href="#"><i class="lni-facebook-filled" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li> -->
				<!-- <li><a href="#"><i class="lni-instagram-filled" aria-hidden="true"></i></a></li> -->
			  </ul>
			</div>
		  </div>
		  <!-- Team Item Ends -->
		</div>
		<div class="col-lg-6 col-md-12 col-xs-12">
		  <!-- Team Item Starts -->
		  <div class="team-item wow fadeInRight" data-wow-delay="0.6s">
			<div class="team-img">
			  <img id="avatar-img2" class="img-fluid" src="img/team/avatar-mastroianni.png" alt="" width="143">
			</div>
			<div class="contetn">
			  <div class="info-text">
				<h3 id="avatar-nome2"><a href="#">Alberto Mastroianni</a></h3>
				<p id="avatar-ruolo2">Tutor</p>
			  </div>
			  <p id="avatar-desc2">Preparato ed Appassionato. E' pronto a soddisfare ogni tua esigenza.</p>
			  <ul class="social-icons">
				<!-- <li><a href="#"><i class="lni-facebook-filled" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li> -->
				<!-- <li><a href="#"><i class="lni-instagram-filled" aria-hidden="true"></i></a></li> -->
			  </ul>
			</div>
		  </div>
		  <!-- Team Item Ends -->
		</div>
		<div class="col-lg-6 col-md-12 col-xs-12">
		  <!-- Team Item Starts -->
		  <div class="team-item wow fadeInRight" data-wow-delay="0.8s">
			<div class="team-img">
			  <img id="avatar-img3" class="img-fluid" src="img/team/avatar-canale.png" alt="" width="143">
			</div>
			<div class="contetn">
			  <div class="info-text">
				<h3 id="avatar-nome3"><a href="#">Andrea Canale</a></h3>
				<p id="avatar-ruolo3">Software Assistant</p>
			  </div>
			  <p id="avatar-desc3">Sempre disponibile per aiutare o chiarire qualunque dubbio nel mondo del software.</p>
			  <ul class="social-icons">
				<!-- <li><a href="#"><i class="lni-facebook-filled" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li> -->
				<!-- <li><a href="#"><i class="lni-instagram-filled" aria-hidden="true"></i></a></li> -->
			  </ul>
			</div>
		  </div>
		  <!-- Team Item Ends -->
		</div>
	  </div>
	</div>
  </section>
  <!-- Team Section End -->

  <!-- Pricing section Start --> 
  <!-- <section id="pricing" class="section-padding">
	<div class="container">
	  <div class="section-header text-center">          
		<h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Pricing</h2>
		<div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
	  </div>
	  <div class="row">
		<div class="col-lg-4 col-md-6 col-xs-12">
		  <div class="table wow fadeInLeft" data-wow-delay="1.2s">
			<div class="icon-box">
			  <i class="lni-package"></i>
			</div>
			<div class="pricing-header">
			  <p class="price-value">$10<span> /mo</span></p>
			</div>
			<div class="title">
			  <h3>Pro</h3>
			</div>
			<ul class="description">
			  <li>1 user</li>
			  <li>10 GB storage</li>
			  <li>Email support</li>
			  <li>Lifetime updates</li>
			</ul>
			<button class="btn btn-common">Buy Now</button>
		  </div> 
		</div>
		<div class="col-lg-4 col-md-6 col-xs-12 active">
		  <div class="table wow fadeInUp" id="active-tb" data-wow-delay="1.2s">
			<div class="icon-box">
			  <i class="lni-drop"></i>
			</div>
			<div class="pricing-header">
			  <p class="price-value">$35<span> /mo</span></p>
			</div>
			<div class="title">
			  <h3>Plus</h3>
			</div>
			<ul class="description">
			  <li>10 user</li>
			  <li>30 GB storage</li>
			  <li>Priority email support</li>
			  <li>Lifetime updates</li>
			</ul>
			<button class="btn btn-common">Buy Now</button>
		 </div> 
		</div>
		<div class="col-lg-4 col-md-6 col-xs-12">
		  <div class="table wow fadeInRight" data-wow-delay="1.2s">
			<div class="icon-box">
			  <i class="lni-star"></i>
			</div>
			<div class="pricing-header">
			  <p class="price-value">$150<span> /mo</span></p>
			</div>
			<div class="title">
			  <h3>Premium</h3>
			</div>
			<ul class="description">
			  <li>Unlimited users</li>
			  <li>Unlimited storage</li>
			  <li>24/7 support</li>
			  <li>Lifetime updates</li>
			</ul>
			<button class="btn btn-common">Buy Now</button>
		  </div> 
		</div>
	  </div>
	</div>
  </section> -->
  <!-- Pricing Table Section End -->

  <!-- Testimonial Section Start -->
  <section id="testimonial" class="testimonial section-padding hide">
	<div class="container">
	  <div class="row justify-content-center">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		  <div id="testimonials" class="owl-carousel wow fadeInUp" data-wow-delay="1.2s">
			<div class="item">
			  <div class="testimonial-item">
				<div class="img-thumb">
				  <img src="img/testimonial/img1.jpg" alt="">
				</div>
				<div class="info">
				  <h2><a href="#">Gioele Mari</a></h2>
				  <h3><a href="#">Creative Head</a></h3>
				</div>
				<div class="content">
				  <p class="description">I ragazzi del ATS sono proprio bravi.Un problema risolvono e 100 ne creano!<br/><br /></p>
				  <div class="star-icon mt-3">
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-half"></i></span>
				  </div>
				</div>
			  </div>
			</div>
			<div class="item">
			  <div class="testimonial-item">
				<div class="img-thumb">
				  <img src="img/testimonial/img2.jpg" alt="">
				</div>
				<div class="info">
				  <h2><a href="#">Caterina de' Medici</a></h2>
				  <h3><a href="#">Ancient Technology co.</a></h3>
				</div>
				<div class="content">
				  <p class="description">ATS propone soluzioni futuristiche!!<br/><br /><br /></p>
				  <div class="star-icon mt-3">
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-half"></i></span>
					<span><i class="lni-star-half"></i></span>
				  </div>
				</div>
			  </div>
			</div>
			<div class="item">
			  <div class="testimonial-item">
				<div class="img-thumb">
				  <img src="img/testimonial/img3.jpg" alt="">
				</div>
				<div class="info">
				  <h2><a href="#">Gabriele Bertino</a></h2>
				  <h3><a href="#">Crazy Design co.</a></h3>
				</div>
				<div class="content">
				  <p class="description">Quasi qausi partecipo anche io ad ATS.... ma no lascio il lavoro duro agli esperti :)<br /><br /></p>
				  <div class="star-icon mt-3">
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-half"></i></span>
				  </div>
				</div>
			  </div>
			</div>
			<div class="item">
			  <div class="testimonial-item">
				<div class="img-thumb">
				  <img src="img/testimonial/img4a.jpg" alt="">
				</div>
				<div class="info">
				  <h2><a href="#">Marco Garabello0</a></h2>
				  <h3><a href="#">Compiler</a></h3>
				</div>
				<div class="content">
				  <p class="description">I ragazzi di ATS sono proprio bravi, ma troppo lenti. Io faccio tutto in metà del tempo!!<br /></p>
				  <div class="star-icon mt-3">
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-filled"></i></span>
					<span><i class="lni-star-half"></i></span>
					<span><i class="lni-star-half"></i></span>
					<span><i class="lni-star-half"></i></span>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </section>


  <!-- Testimonial Section End -->

  <!-- Call To Action Section Start -->
  <section id="cta" class="section-padding hide">
	<div class="container">
	  <div class="row">
		<div class="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">           
		  <div class="cta-text">
			<h4>Consulenza gratuita</h4>
			<p>Vieni a trovarci entro il 30 Ottobre ed ottieni un consulto gratuito!</p>
		  </div>
		</div>
		<div class="col-lg-6 col-md-6 col-xs-12 text-right wow fadeInRight" data-wow-delay="0.3s">
		  <br><a href="#" class="btn btn-common">Registrati Ora</a>
		</div>
	  </div>
	</div>
  </section>
  <!-- Call To Action Section Start -->

  <!-- Contact Section Start -->
  <section id="contact" class="section-padding">    
	<div class="container">
	  <div class="section-header text-center">          
		<h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Contattaci</h2>
		<div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
	  </div>
	  <div class="row contact-form-area wow fadeInUp" data-wow-delay="0.3s">   
		<div class="col-lg-7 col-md-12 col-sm-12">
		  <div class="contact-block">
			<div class="form-container">
				<h2>Richiesta di Assistenza Informatica</h2>
				<form id="assistenzaForm">
					<div class="form-group">
						<label for="from_name">Nome e Cognome:</label>
						<input type="text" id="from_name" name="from_name" required>
					</div>
					<div class="form-group">
						<label for="email">Email:</label>
						<input type="email" id="email" name="email" required>
					</div>
					<div class="form-group">
						<label for="oggetto">Oggetto:</label>
						<input type="text" id="oggetto" name="oggetto" required>
					</div>
					<div class="form-group">
						<label for="servizio">Servizio Richiesto:</label>
						<select id="servizio" name="servizio" required>
							<option value="">Seleziona un servizio</option>
							<option value="riparazione_computer">Riparazione Computer</option>
							<option value="rinnovo_PC_laptop">Rinnovo PC-Laptop</option>
							<option value="assistenza_informatica">Assistenza Informatica</option>
							<option value="installazione_linux">Installazione Linux</option>
							<option value="app_development">App Development</option>
							<option value="supporto_didattico">Supporto Didattico</option>
						</select>
					</div>
					<div class="form-group">
						<label for="problema">Descrivi il Problema:</label>
						<textarea id="problema" name="problema" required></textarea>
					</div>
					<button type="submit">Invia Richiesta</button>
				</form>
			</div>
		  </div>
		</div>
		<div class="col-lg-5 col-md-12 col-xs-12">
		  <div class="map">
			<object style="border:0; height: 280px; width: 100%;" data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.6577865807726!2d7.642479515916548!3d45.031871979098206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478812d8f5b94a11%3A0x10ba7aca867a6c6e!2sCorso%20Unione%20Sovietica%2C%20312%2C%2010135%20Torino%20TO!5e0!3m2!1sit!2sit!4v1629557139045!5m2!1sit!2sit"></object>
		  </div>
		</div>
	  </div>
	</div> 
  </section>
  <!-- Contact Section End -->

  <!-- Go to Top Link -->
  <a href="#" class="back-to-top">
	<i class="lni-arrow-up"></i>
</a>

<!-- Preloader -->
<!-- <div id="preloader">
  <div class="loader" id="loader-1"></div>
</div> -->
<!-- End Preloader -->
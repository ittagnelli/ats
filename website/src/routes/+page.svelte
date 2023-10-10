<script context="module">
	import { log_access } from "$lib/js/firebase";

	export const prerender = true;

	let name, email, msg_subject, msg_service, message;

	function sendEmail(){

    console.log(name);
    console.log(email);
    console.log(msg_subject);
    console.log(msg_service);
    console.log(message);
   
    const email_body = `
        <table border="1">
        <tr>
            <td><h2>Richiesta da:</h2></td>
            <td><h2>#nome</h2></td>
        </tr>
        <tr>
            <td><h2>Email:</h2></td>
            <td><h2>#email</h2></td>
        </tr>
        <tr>
            <td><h2>Servizio:</h2></td>
            <td><h2>#servizio</h2></td>
        </tr>
        <tr>
            <td><h2>Oggetto:</h2></td>
            <td><h2>#oggetto</h2></td>
        </tr>
        <tr>
            <td><h2>Richiesta:</h2></td>
            <td><h2><pre>#richiesta</pre></h2></td>
        </tr>
    </table>`
    .replace("#nome", name)
    .replace("#email", email)
    .replace("#servizio", msg_service)
    .replace("#oggetto", msg_subject)
    .replace("#richiesta", message);
    
    console.log(email_body);
    if(message == '' || name == '' || email == '' || msg_subject == '' || msg_service == null){
        alert("Per favore compilare tutti i campi per proceedre con l'invio!!!");
        console.log("Errore: non tutti i campi sono stati compilati");
    }
    else{
        Email.send({
            SecureToken : '0dbd587a-5b00-4cca-b1ef-8d25e73fda99',
            To : 'ats@istitutoagnelli.it',
            From : 'ats@istitutoagnelli.it',
            Subject : msg_subject,
            Body : email_body
        }).then(
            (_) => {
                log_access("email");
                alert("Messaggio inviato con successo! Grazie");
                console.log("Messaggio inviato con successo!");
				name = "";
				email = "";
				msg_subject = "";
				msg_service = "";
				message = "";
            }   
        ); 
    }
}
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

   <!-- Services Section Start -->
   <section id="services" class="section-padding">
	<div class="container">
	  <div class="section-header text-center">
		<h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">I Nostri Servizi</h2>
		<div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
	  </div>
	  <div class="row">
		<!-- Services item -->
		<div class="col-md-6 col-lg-4 col-xs-12">
		  <div class="services-item wow fadeInRight" data-wow-delay="0.3s">
			<div class="icon">
			  <i class="lni-cog"></i>
			</div>
			<div class="services-content">
			  <h3><a href="/about">Riparazione Computer</a></h3>
			  <p>PC o Laptop guasto? Nessun problema! <br />ATS Team è qua per te! Risolviamo qualsiasi tipo di problematica sia Software che Hardware. <br /><br /></p>
			</div>
		  </div>
		</div>
		<!-- Services item -->
		<div class="col-md-6 col-lg-4 col-xs-12">
		  <div class="services-item wow fadeInRight" data-wow-delay="0.6s">
			<div class="icon">
			  <i class="lni-stats-up"></i>
			</div>
			<div class="services-content">
			  <h3><a href="#">Rinnovo PC-Laptop</a></h3>
			  <p>Il Laptop è datato e lento? Non preoccuparti!  Abbiamo varie soluzioni per "rivitalizzare" il tuo PC aumentandone le prestazioni senza doverlo sostituire. </p>
			</div>
		  </div>
		</div>
		<!-- Services item -->
		<div class="col-md-6 col-lg-4 col-xs-12">
		  <div class="services-item wow fadeInRight" data-wow-delay="0.9s">
			<div class="icon">
			  <i class="lni-users"></i>
			</div>
			<div class="services-content">
			  <h3><a href="#">Assistenza Informatica</a></h3>
			  <p>Stai riscontrando problemi, di qualsiasi natura, con il tuo telefono o computer? <br /> Siamo qui per supportarti e aiutarti a risolvere tutti i tuoi problemi.<br /><br /> </p>
			</div>
		  </div>
		</div>
		<!-- Services item -->
		<div class="col-md-6 col-lg-4 col-xs-12">
		  <div class="services-item wow fadeInRight" data-wow-delay="1.2s">
			<div class="icon">
			  <i class="lni-layers"></i>
			</div>
			<div class="services-content">
			  <h3><a href="#">Installazione Linux</a></h3>
			  <p>Vuoi provare l'ebrezza di Linux ma non ti senti sicuro? Passa a trovarci, possiamo installare Linux in varie modalità permettendoti di sperimentare in sicurezza.</p>
			</div>
		  </div>
		</div>
		<!-- Services item -->
		<div class="col-md-6 col-lg-4 col-xs-12">
		  <div class="services-item wow fadeInRight" data-wow-delay="1.5s">
			<div class="icon">
			  <i class="lni-mobile"></i>
			</div>
			<div class="services-content">
			  <h3><a href="#">App Development</a></h3>
			  <p>Hai in mente un sito o un app ma non puoi svilupparla? ATS ti aiuta a sviluppare siti web, applicazioni mobili e qualsiasi idea innovativa tu abbia.<br /><br /></p>
			</div>
		  </div>
		</div>
		<!-- Services item -->
		<div class="col-md-6 col-lg-4 col-xs-12">
		  <div class="services-item wow fadeInRight" data-wow-delay="1.8s">
			<div class="icon">
			  <i class="lni-rocket"></i>
			</div>
			<div class="services-content">
			  <h3><a href="#">Supporto Didattico</a></h3>
			  <!-- <p>Non hai capito cos'è l'entropia di un messaggio? Fai fatica a capire alcuni concetti/argomenti? Non preoccuparti ci siamo passati anche noi. Possiamo aiutarti a studiare e a preparati per le verifiche.</p> -->
			  <p>Non hai capito cos'è l'entropia di un messaggio? Fai fatica a capire alcuni argomenti? Non preoccuparti ci siamo passati anche noi. Possiamo aiutarti a studiare e a preparati per le verifiche.</p>
			</div>
		  </div>
		</div>
	  </div>
	  <div class="row">
		<div class="col-md-12 col-lg-12 col-xs-12 ats_price">
			<br />
			I servizi offerti da ATS hanno un costo minimo di 5 Euro. Il prezzo finale sarà stabilito insieme ai nostri tecnici al momento del preventivo.
		</div>
	  </div>
	</div>
  </section>
  <!-- Services Section End -->

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
			  <img id="avatar-img0" class="img-fluid" src="img/team/avatar-ruggieri.png" alt="" width="143">
			</div>
			<div class="contetn">
			  <div class="info-text">
				<h3 id="avatar-nome0"><a href="#">Dario Ruggieri</a></h3>
				<p id="avatar-ruolo0">Software Assistant</p>
			  </div>
			  <p id="avatar-desc0">Dario è come te, pieno di domande. Ora però sarà pronto a darti una risposta!</p>
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
			  <img id="avatar-img1" class="img-fluid" src="img/team/avatar-viteritti.png" alt="" width="143">
			</div>
			<div class="contetn">
			  <div class="info-text">
				<h3 id="avatar-nome1"><a href="#">William Viteritti</a></h3>
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
			  <img id="avatar-img2" class="img-fluid" src="img/team/avatar-quijada.png" alt="" width="143">
			</div>
			<div class="contetn">
			  <div class="info-text">
				<h3 id="avatar-nome2"><a href="#">Pierpaolo Quijada</a></h3>
				<p id="avatar-ruolo2">Tutor</p>
			  </div>
			  <p id="avatar-desc2">Preparato ed Appassionato. E' pronto a soddisfare ogni tua esigenza</p>
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
			  <img id="avatar-img3" class="img-fluid" src="img/team/avatar-garabello.png" alt="" width="143">
			</div>
			<div class="contetn">
			  <div class="info-text">
				<h3 id="avatar-nome3"><a href="#">Marco Garabello</a></h3>
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
			<form id="contactForm">
			  <div class="row">
				<div class="col-md-6">
				  <div class="form-group">
					<input type="text" class="form-control" id="name" name="name" placeholder="Nome e Cognome" required data-error="Per favore inserisci Nome e Cognome">
					<div class="help-block with-errors"></div>
				  </div>                                 
				</div>
				<div class="col-md-6">
				  <div class="form-group">
					<input type="text" placeholder="Email" id="email" class="form-control" name="email" required data-error="Per favore inserisci il tuo mail">
					<div class="help-block with-errors"></div>
				  </div> 
				</div>
				 <div class="col-md-6">
				  <div class="form-group">
					<input type="text" placeholder="Oggetto" id="msg_subject" class="form-control" required data-error="Per favore inserisci l'oggetto della richiesta">
					<div class="help-block with-errors"></div>
				  </div>
				</div>
				<div class="col-md-6">
				  <div class="form-group">
					<select id="msg_service" class="form-control" required data-error="Per favore selezione il servizio desiderato">
					  <option value="" disabled selected>Seleziona il servizio desiderato</option>
					  <option value="srv1">Riparazione Computer</option>
					  <option value="srv2">Rinnovo PC-Laptop</option>
					  <option value="srv3">Assistenza Informatica</option>
					  <option value="srv4">Installazione Linux</option>
					  <option value="srv5">App Development</option>
					  <option value="srv6">Supporto Didattico</option>
					</select>
					<div class="help-block with-errors"></div>
				  </div>
				</div>
				<div class="col-md-12">
				  <div class="form-group"> 
					<textarea class="form-control" id="message" placeholder="Descrivi il tuo problema o la tua richiesta" rows="7" data-error="Per favore descrivi il tuo problema o richiesta" required></textarea>
					<div class="help-block with-errors"></div>
				  </div>
				  <div class="submit-button text-left">
					<button class="btn btn-common" id="form-submit" type="submit" on:click={sendEmail}>Invia Richiesta</button>
					<div id="msgSubmit" class="h3 text-center hidden"></div> 
					<div class="clearfix"></div> 
				  </div>
				</div>
			  </div>            
			</form>
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
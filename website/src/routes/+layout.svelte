<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';
	import { initializeApp } from 'firebase/app';
	import { app } from '$lib/js/store';
	import { log_access } from '$lib/js/firebase';

	onMount(() => {
		const firebaseConfig = {
			apiKey: 'AIzaSyDZzdZnS1Bs6pI3eSLqtN_y2C7WpCxPHpM',
			authDomain: 'ats-agnelli.firebaseapp.com',
			projectId: 'ats-agnelli',
			storageBucket: 'ats-agnelli.appspot.com',
			messagingSenderId: '280390716859',
			appId: '1:280390716859:web:10765d0f0b3fb6fa74089e'
		};

		// Initialize Firebase
		$app = initializeApp(firebaseConfig);
		log_access("home");
	});
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

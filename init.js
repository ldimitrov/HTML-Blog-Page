(function() {

	skel.init({
		reset: 'full',
		breakpoints: {
			'global': { range: '*', href: 'style.css', viewport: { scalable: false } },
			'mobile': { range: '-736', href: 'style-mobile.css' },
		}
	});

	// Events (JS).
		
		// Remove "loading" class once the page has fully loaded.
			window.onload = function() {
				document.body.className = '';
			}

		// Prevent scrolling on touch.
			window.ontouchmove = function() {
				return false;
			}

		// Fix scroll position on orientation change.
			window.onorientationchange = function() {
				document.body.scrollTop = 0;
			}
})();
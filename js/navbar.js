// This should really be titled "Mobile-Tablet Navbar"
// and i think you know why


// FUNCTION PURPOSE
// When screen is viewed on a mobile or tablet
// our navbar will change styling to a burger menu
// the functions below help this menu slide out when tapped

// These global variables assign a const to each class found in _header-mobile.scss
const navSlide = () => { //This is a parent const that has 3 children						
	const burger = document.querySelector('.burger'); // the burger menu styling
	const nav = document.querySelector('.navlinks') // a new nav const to select the navigation links / parent 
	const navLinks = document.querySelectorAll('.navlinks li'); // this grabs the menu list of navlinks / children

	burger.addEventListener('click', () => {  // this is an event listener waiting for someone to click the menu
			//Toggle nav menu in/out//
		nav.classList.toggle('navshow'); // when the burger button is pressed, toggle (slide out) class navshow

		navLinks.forEach((link, index) => {  // this grabs the parent navlinks for all and makes them a "link" var below
			if (link.style.animation) { // if all the links have style and animation
				 link.style.animation = ''; // but the style and animations have no action ..then do nothing
			} else { // or else do this cool fade in for all the links 
				link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + .15}s`;
			}
		});

		//burger animation found in _header-mobile.scss 
		// toggle the burger menu
		burger.classList.toggle('navtog');
	});
}

const NavMenuSlideOut = () => { // new function to slide nav menu in and out from side of screen based on function defined above
	navSlide(); // actions the navSlide const defined above
}
NavMenuSlideOut(); // executes and loops the whole function


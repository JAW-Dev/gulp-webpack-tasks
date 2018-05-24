'use strict';

class MobileMenu {

	/**
	 * Constructor
	 *
	 * @author Theme_Author
	 * @since 1.0.0
	 *
	 * @param {string} menu        The menu selector.
	 * @param {string} openButton  The open button selector.
	 * @param {string} closeButton The close button selector.
	 * @param {string} toggleClass The class to add to the menu.
	 *
	 * @return void
	 */
	constructor( menu, openButton, closeButton, toggleClass ) {
		this.menu = document.querySelector( menu );
		this.openButton = document.querySelector( openButton );
		this.closeButton = document.querySelector( closeButton );
		this.toggleClass = toggleClass;
		this.openButtonClick();
		this.closeButtonClick();
	}

	/**
	 * Open the mobile menu.
	 *
	 * @author Theme_Author
	 * @since 1.0.0
	 *
	 * @return void
	 */
	openButtonClick() {
		this.openButton.addEventListener( 'click', () => {
			this.menu.classList.add( this.toggleClass );
		});
	}

	/**
	 * Close the mobile menu.
	 *
	 * @author Theme_Author
	 * @since 1.0.0
	 *
	 * @return void
	 */
	closeButtonClick() {
		this.closeButton.addEventListener( 'click', () => {
			this.menu.classList.remove( this.toggleClass );
		});
	}
}

export default MobileMenu;

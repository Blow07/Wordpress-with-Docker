/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.dev/assets/shared/js/frontend/components/primary-menu.js":
/*!*******************************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/components/primary-menu.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_responsive_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/responsive-nav */ "./.dev/assets/shared/js/frontend/vendor/responsive-nav.js");
/* global TenUp */

/**
 * Hook up navigation.
 */

const init = () => {
  if (TenUp) {
    TenUp.navigation({
      target: '#header__navigation',
      toggle: '#nav-toggle',
      // eslint-disable-next-line
      sub_menu_open: goFrontend.openMenuOnHover ? 'hover' : 'click'
    });
  }

  document.addEventListener('keydown', lockMenuFocus);
};
/**
 * Lock tabbing to the main navigation only.
 *
 * @param {event} e
 */


function lockMenuFocus(e) {
  if (['Space', 'Enter', 'Tab'].includes[e.code] || !document.querySelector('body').classList.contains('menu-is-open')) {
    return;
  }

  const element = document.querySelector(':focus');
  const isShiftTab = e.shiftKey && e.code === 'Tab';

  if (element.getAttribute('id') === 'nav-toggle') {
    if (isShiftTab) {
      return;
    }

    setTimeout(function () {
      document.querySelectorAll('ul.primary-menu li:first-child a')[0].focus();
    }, 10);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ }),

/***/ "./.dev/assets/shared/js/frontend/components/search-toggle.js":
/*!********************************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/components/search-toggle.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const searchToggle = () => {
  const searchToggleEl = document.getElementById('header__search-toggle');

  if (!searchToggleEl) {
    return;
  }

  const performToggle = element => {
    const toggle = element;
    const target = document.querySelector(toggle.dataset.toggleTarget);

    if (target.classList.contains('show-modal')) {
      // Hide the modal.
      target.classList.remove('active');
      setTimeout(() => {
        target.classList.remove('show-modal');
        toggle.focus();
      }, 250);
    } else {
      // Show the modal.
      target.classList.add('show-modal');
      setTimeout(() => {
        target.classList.add('active');

        if (toggle.dataset.setFocus) {
          const focusElement = document.querySelector(toggle.dataset.setFocus);

          if (focusElement) {
            const searchTerm = focusElement.value;
            focusElement.value = '';
            focusElement.focus();
            focusElement.value = searchTerm;
          }
        }
      }, 10);
    }
  };

  document.querySelectorAll('*[data-toggle-target]').forEach(element => {
    element.addEventListener('click', event => {
      event.preventDefault();
      performToggle(element);
    });
  }); // Close modal on escape key press.

  document.addEventListener('keyup', event => {
    if (event.keyCode === 27) {
      event.preventDefault();
      document.querySelectorAll('.search-modal.active').forEach(element => {
        performToggle(document.querySelector('*[data-toggle-target="' + element.dataset.modalTargetString + '"]'));
      });
    }
  }); // Close modal on outside click.

  document.addEventListener('click', event => {
    const target = event.target;
    const modal = document.querySelector('.search-modal.active');

    if (target === modal) {
      performToggle(document.querySelector('*[data-toggle-target="' + modal.dataset.modalTargetString + '"]'));
    }
  });
  document.addEventListener('keydown', lockSearchFocus);
};
/**
 * Lock tabbing to the search form only.
 *
 * @param {event} e
 */


function lockSearchFocus(e) {
  // If the keypress isn't a tab or the search form isn't active, return
  if (e.keyCode !== 9 || !document.querySelector('.site-search.active')) {
    return;
  } // Current active element before it moves


  const activeElement = document.activeElement; // If we're on the input and shift+tab was pressed, override and focus on button.

  if (document.activeElement.classList.contains('search-form__input') && e.shiftKey) {
    setTimeout(function () {
      // Focus the correct button by only looking for it in the parent element
      activeElement.parentElement.getElementsByClassName('search-input__button').item(0).focus();
    }, 10);
  } // If we're on the button and tab was pressed, override and focus on input.


  if (document.activeElement.classList.contains('search-input__button') && !e.shiftKey) {
    setTimeout(function () {
      // Focus the correct input by only looking for it in the parent element
      activeElement.parentElement.getElementsByClassName('search-form__input').item(0).focus();
    }, 10);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchToggle);

/***/ }),

/***/ "./.dev/assets/shared/js/frontend/components/woo-menu-cart.js":
/*!********************************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/components/woo-menu-cart.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuObject = document.getElementById('header__cart-toggle');
const siteOverlay = document.getElementById('site-overlay');
const sideNav = document.getElementById('site-nav--cart');
const sideNavClose = document.getElementById('site-close-handle');

const wooMenuCart = () => {
  if (null === menuObject || null === siteOverlay || null === sideNavClose) {
    return;
  }

  document.body.classList.add('has-woo-cart-slideout');
  menuObject.addEventListener('click', function (event) {
    event.preventDefault();
    toggleSideNavVisibility();
  });
  siteOverlay.addEventListener('click', toggleSideNavVisibility);
  sideNavClose.addEventListener('click', toggleSideNavVisibility);
};

const toggleSideNavVisibility = () => {
  sideNav.classList.toggle('active');
  siteOverlay.classList.toggle('active');
  document.body.classList.toggle('sidebar-move');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wooMenuCart);

/***/ }),

/***/ "./.dev/assets/shared/js/frontend/utility/debounce.js":
/*!************************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/utility/debounce.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 *
 * @param {Function} func      Funtion to run against.
 * @param {number}   wait      Amount to wait
 * @param {boolean}  immediate Trigger on leading edge?
 */
const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    const args = arguments;
    const context = this;
    /**
     * Later
     */

    const later = () => {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);

/***/ }),

/***/ "./.dev/assets/shared/js/frontend/vendor/responsive-nav.js":
/*!*****************************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/vendor/responsive-nav.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/debounce */ "./.dev/assets/shared/js/frontend/utility/debounce.js");

/********************************

	Name: WordPress Accessible Responsive Navigation Menu
	Usage:

	TenUp.build_menu({

		'target'		:	'#primary-nav',      // the selector of the nav menu <ul>
		'toggle'		:	'#js-menu-toggle',   // the ID of the link you're using to open/close the small screen menu
		'sub_menu_open'	:	'hover'

	}, function() {

		console.log('Amazing callback function!');

	});

********************************/

/* eslint-disable */

(function () {
  'use strict'; // Define global TenUp object if it doesn't exist

  if ('object' !== typeof window.TenUp) {
    window.TenUp = {};
  }
  /*
  	Cache and define some variables
  */
  // init function


  TenUp.navigation = function (options, callback) {
    var defaults = {
      'target': '#primary-nav',
      'toggle': '#js-menu-toggle',
      'sub_menu_open': 'hover'
    };
    var opt; // Map all default settings to user defined options if they exist

    for (opt = 0; opt < defaults.length; opt = opt + 1) {
      if (typeof options[opt] === 'undefined') {
        options[opt] = defaults[opt];
      }
    }

    var menu = document.querySelector(options.target); // Bail out if there's no menu

    if (!menu) {
      return;
    }

    var menu_id = menu.getAttribute('id');
    var menu_toggle = document.querySelector(options.toggle);
    var aria_controls = menu_toggle.getAttribute('aria-controls');
    var sub_menu_acion = options.sub_menu_open;
    var current_menu_item = menu.querySelector('.current-menu-item');
    var menu_items_links = menu.querySelectorAll('.menu-item > a');
    var menu_items_links_count = menu_items_links.length;
    var menu_items_with_children = menu.querySelectorAll('.menu-item-has-children');
    var menu_items_with_children_count = menu_items_with_children.length;
    var currentTarget;
    var target;
    var i; // Listener for the menu open/close action

    function listener_menu(e) {
      // Stop links from firing
      e.preventDefault();

      if (document.body.classList.contains('menu-is-open')) {
        // Close the menu
        menu.setAttribute('aria-hidden', 'true');
        menu_toggle.setAttribute('aria-expanded', 'false'); // Bubble to the document

        document.body.classList.remove('menu-is-open');
      } else {
        // Open the menu
        menu.setAttribute('aria-hidden', 'false');
        menu_toggle.setAttribute('aria-expanded', 'true'); // Set focus to the first link

        menu.querySelectorAll('a')[0].focus(); // Bubble to the document

        document.body.classList.add('menu-is-open');
      }
    }

    ; // listener_menu()
    // Listener for submenu on click

    function listener_submenu_click(e) {
      currentTarget = e.currentTarget;
      target = e.target;

      if (target.tagName === 'svg' || target.tagName === 'path') {
        target = currentTarget.closest('.menu-item > a');
      } else {
        console.log(target.previousSibling.previousSibling.href);

        if (goFrontend.isMobile) {
          if (target.tagName === 'A') {
            return;
          }

          if (target.tagName === 'UL') {
            let tempURL = target.previousSibling.previousSibling.href;

            if (null !== tempURL) {
              window.location.href = tempURL;
              return;
            }
          }
        }
      }

      if (target.getAttribute('aria-haspopup')) {
        // Stop links from firing
        e.preventDefault(); // Stop events from bubbling up to parent elements

        e.stopPropagation();
        var parent_menu = target.parentNode;
        var sub_menu = parent_menu.querySelector('.sub-menu');
        var all_open_menus = menu.querySelectorAll('.child-has-focus');
        var all_open_menus_count = all_open_menus.length;
        var all_open_menu_triggers = menu.querySelectorAll('.child-has-focus > a.submenu-is-open');
        var all_open_menu_triggers_count = all_open_menu_triggers.length;
        var t;

        if (get_screen_size('has-full-nav')) {
          if (all_open_menu_triggers_count > 0) {
            // Make sure only 1 menu item can be opened at a time
            for (t = 0; t < all_open_menu_triggers_count; t = t + 1) {
              // Check if the open menu is top-level, if so, close it
              if (parent_menu.parentNode === menu) {
                menu_sub_close(all_open_menu_triggers[t]);
              }
            } // for

          } // if

        } // if


        if ((e.target.nodeName === 'A' || target.tagName === 'A') && target.classList.contains('submenu-is-open')) {
          // The menu is already open, so this should be a close action
          menu_sub_close(target);
        } else {
          menu_sub_close_all(); // The menu is closed, so this click should open it

          menu_sub_open(target); // Reset the focus

          sub_menu.querySelectorAll('a')[0].focus();
        }
      }
    }

    ; // listener_submenu_click()
    // Listener for same page link (hash) click

    function listener_hash_click() {
      // Close the menu
      menu.setAttribute('aria-hidden', 'true');
      menu_toggle.setAttribute('aria-expanded', 'false'); // Bubble to the document

      document.body.classList.remove('menu-is-open');
    }

    ; // When "hover", this is how focus should act

    function listener_submenu_focus(e) {
      var currentTarget = e.currentTarget;
      var target = e.target;
      var parent_menu = target.parentNode;
      var sub_menu = parent_menu.querySelector('.sub-menu');
      var all_open_menu_triggers = menu.querySelectorAll('.child-has-focus > a.submenu-is-open');
      var all_open_menu_triggers_count = all_open_menu_triggers.length;
      var t;

      if (get_screen_size('has-full-nav')) {
        if (all_open_menu_triggers_count > 0) {
          // Make sure only 1 menu item can be opened at a time
          for (t = 0; t < all_open_menu_triggers_count; t = t + 1) {
            // Check if the open menu is top-level, if so, close it
            if (parent_menu.parentNode === menu) {
              menu_sub_close(all_open_menu_triggers[t]);
            }
          }
        }
      }

      menu_sub_open(target);
    }

    ; // Listener for the window resize

    var listener_window = (0,_utility_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(function (e) {
      if (get_screen_size('has-offscreen-nav')) {
        menu_create();
      } else {
        menu_destroy();
      }
    }, 100); // listener_window()
    // Close the menu if you click somewhere else

    function listener_close_open_menus(e) {
      var open_menus = menu.querySelectorAll('.submenu-is-open');
      var open_menus_count = open_menus.length;
      var opn; // if the event is keyup and it was the ESC key

      if (e.type === 'keyup' && e.keyCode == 27) {
        // We were getting some errors, so let's add in a checkpoint
        if (open_menus_count) {
          // Loop through all the open menus and close them
          for (opn = 0; opn < open_menus.length; opn = opn + 1) {
            menu_sub_close(open_menus[opn]);
          } // for
          // Return focus to the first open menu


          if (sub_menu_acion === 'click') {
            open_menus[0].focus();
          }
        } // if
        // If the event was a mouseup

      } else if (e.type === 'mouseup') {
        if (!menu.contains(e.target) && menu.querySelector('.submenu-is-open')) {
          // We were getting some error, so let's add in a second checkpoint
          if (open_menus_count) {
            for (opn = 0; opn < open_menus.length; opn = opn + 1) {
              menu_sub_close(open_menus[opn]);
            } // for

          }
        } // if

      }
    }

    ; // listener_close_open_menus()

    function menu_sub_close(open_item) {
      if (open_item && open_item.classList) {
        open_item.classList.remove('submenu-is-open');
        open_item.parentNode.classList.remove('child-has-focus');
      }

      if (open_item && open_item.parentNode && open_item.parentNode.querySelector('.sub-menu')) {
        open_item.parentNode.querySelector('.sub-menu').setAttribute('aria-hidden', 'true');
      }
    }

    ; // menu_sub_close()

    function menu_sub_close_all() {
      var open_menus = menu.querySelectorAll('.submenu-is-open');
      var open_menus_count = open_menus.length;
      var opn; // We were getting some errors, so let's add in a checkpoint

      if (open_menus_count) {
        // Loop through all the open menus and close them
        for (opn = 0; opn < open_menus.length; opn = opn + 1) {
          menu_sub_close(open_menus[opn]);
        } // for

      } // if

    }

    ; // menu_sub_close()

    function menu_sub_open(closed_item) {
      closed_item.classList.add('submenu-is-open');
      closed_item.parentNode.classList.add('child-has-focus');

      if (closed_item.parentNode.querySelector('.sub-menu')) {
        closed_item.parentNode.querySelector('.sub-menu').setAttribute('aria-hidden', 'false');
      }
    }

    ; // menu_sub_open()
    // Method to create the small screen menu

    function menu_create() {
      if (!document.body.classList.contains('has-offscreen-nav')) {
        if (!document.body.classList.contains('menu-is-open')) {
          menu.setAttribute('aria-hidden', 'true');
          menu_toggle.setAttribute('aria-expanded', 'false');
        } else {
          menu.setAttribute('aria-hidden', 'false');
          menu_toggle.setAttribute('aria-expanded', 'true');
        } // Loop through all submenus and bind events when needed


        for (i = 0; i < menu_items_with_children_count; i++) {
          var svgElements = menu_items_with_children[i].querySelectorAll('svg');

          for (var q = 0; q < svgElements.length; q = q + 1) {
            svgElements[q].addEventListener('click', listener_submenu_click);
          }

          menu_items_with_children[i].removeEventListener('focusin', listener_submenu_focus);
        } // for
        // Loop through all links for hash and bind events when needed


        for (i = 0; i < menu_items_links_count; i++) {
          if (menu_items_links[i].hash && menu_items_links[i].pathname === '/') {
            menu_items_links[i].addEventListener('click', listener_hash_click);
          }
        } // for
        // Bind the event


        menu_toggle.addEventListener('click', listener_menu); // Add the body class to prevent this from running again

        document.body.classList.add('has-offscreen-nav');
        document.body.classList.remove('has-full-nav');
      }
    }

    ; // menu_create()
    // Method to destroy the small screen menu

    function menu_destroy() {
      var tmp_open;
      var tmp_open_count;
      var t;

      if (!document.body.classList.contains('has-full-nav')) {
        // Remove aria-hidden, because we don't need it.
        menu.removeAttribute('aria-hidden'); // Loop through all submenus and bind events when needed

        for (i = 0; i < menu_items_with_children_count; i = i + 1) {
          if (sub_menu_acion !== 'click') {
            menu_items_with_children[i].removeEventListener('click', listener_submenu_click);
            menu_items_with_children[i].addEventListener('focusin', listener_submenu_focus);
            menu.classList.remove('uses-click');
          }
        } // If we're not using click, the open menus need to be reset


        if (sub_menu_acion !== 'click') {
          tmp_open = document.querySelectorAll('.child-has-focus');
          tmp_open_count = tmp_open.length;

          for (t = 0; t < tmp_open_count; t = t + 1) {
            tmp_open[t].classList.remove('child-has-focus');
            tmp_open[t].querySelector('.submenu-is-open').classList.remove('submenu-is-open');
            tmp_open[t].querySelector('.sub-menu').setAttribute('aria-hidden', 'true');
          }
        } // Unbind the event


        menu_toggle.removeEventListener('click', listener_menu); // Add the body class to prevent this from running again

        document.body.classList.add('has-full-nav');
        document.body.classList.remove('has-offscreen-nav');
      }
    }

    ; // Check init menu state

    if (get_screen_size('has-offscreen-nav')) {
      menu_create();
    } // If aria-controls isn't set, set it


    if (!aria_controls) {
      menu_toggle.setAttribute('aria-controls', menu_id);
    }

    if (current_menu_item) {
      current_menu_item.querySelector('a').setAttribute('aria-current', 'page');
    }
    /*
    	Events
    */
    // Debounced resize event to create and destroy the small screen menu options


    window.addEventListener('resize', listener_window); // Close the submenus by clicking off of them or hitting ESC

    document.addEventListener('mouseup', listener_close_open_menus);
    document.addEventListener('keyup', listener_close_open_menus);
    /*
    	Hiding and showing submenus (click, focus, hover)
    */
    // Loop through all items with sub menus and bind focus to them for tabbing

    for (i = 0; i < menu_items_with_children_count; i = i + 1) {
      // Let a screen reader know this menu has a submenu by hooking into the first link
      menu_items_with_children[i].querySelector('a').setAttribute('aria-haspopup', 'true'); // Hide and label each sub menu

      menu_items_with_children[i].querySelector('.sub-menu').setAttribute('aria-hidden', 'true');
      menu_items_with_children[i].querySelector('.sub-menu').setAttribute('aria-label', 'Submenu'); // If the screen is small or the action is set to click

      if (get_screen_size('has-offscreen-nav') || sub_menu_acion === 'click') {
        menu_items_with_children[i].addEventListener('click', listener_submenu_click);
        var svgElements = menu_items_with_children[i].querySelectorAll('svg');

        for (var z = 0; z < svgElements.length; z = z + 1) {
          svgElements[z].addEventListener('click', listener_submenu_click);
          svgElements[z].addEventListener('keypress', e => {
            ['Space', 'Enter'].includes(e.code) && listener_submenu_click(e);
          });
          svgElements[z].setAttribute('tabindex', '0');
        }

        menu.classList.add(sub_menu_acion === 'click' ? 'uses-click' : 'uses-hover');
      } else if (sub_menu_acion !== 'click') {
        if (get_screen_size('has-full-nav')) {
          menu_items_with_children[i].addEventListener('mouseover', listener_submenu_focus);
          menu_items_with_children[i].addEventListener('mouseout', function () {
            var open_menus = menu.querySelectorAll('.submenu-is-open');
            var open_menus_count = open_menus.length;
            var opn; // We were getting some errors, so let's add in a checkpoint

            if (open_menus_count) {
              // Loop through all the open menus and close them
              for (opn = 0; opn < open_menus_count; opn = opn + 1) {
                menu_sub_close(open_menus[opn]);
              } // for

            }
          });
          menu_items_with_children[i].addEventListener('focusin', listener_submenu_focus);
          menu_items_with_children[i].querySelectorAll('.sub-menu').forEach(submenu => {
            submenu.addEventListener('mouseover', event => {
              submenu.parentElement.classList.add('child-has-focus');
              submenu.previousElementSibling.classList.add('submenu-is-open');
            }, false);
          });
        } // if

      } // if

    } // for
    // Execute the callback function


    if (typeof callback === 'function') {
      callback.call();
    }
  }; // build_menu()

  /*
  	Helper functions
  */
  // Get screen size from getComputedStyle (so we don't have to define each breakpoint twice) -- Values are set in CSS --


  function get_screen_size(sizeString) {
    var size = window.getComputedStyle(document.body, ':before').getPropertyValue('content');

    if (size && size.indexOf(sizeString) !== -1) {
      return true;
    }
  }

  ;
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/frontend.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/debounce */ "./.dev/assets/shared/js/frontend/utility/debounce.js");
/* harmony import */ var _components_primary_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/primary-menu.js */ "./.dev/assets/shared/js/frontend/components/primary-menu.js");
/* harmony import */ var _components_search_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search-toggle.js */ "./.dev/assets/shared/js/frontend/components/search-toggle.js");
/* harmony import */ var _components_woo_menu_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/woo-menu-cart.js */ "./.dev/assets/shared/js/frontend/components/woo-menu-cart.js");




(0,_components_primary_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_search_toggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_woo_menu_cart_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
document.addEventListener('DOMContentLoaded', function () {
  const hasSelectiveRefresh = 'undefined' !== typeof wp && wp.customize && wp.customize.selectiveRefresh && wp.customize.navMenusPreview.NavMenuInstancePartial; // partial-content-rendered might render multiple times for some reason, let's make sure to debouce this.

  const init = (0,_utility_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
    // we need to remove this before calling primary menu again.
    document.body.classList.remove('has-offscreen-nav');
    (0,_components_primary_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_components_search_toggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }, 1000);

  if (hasSelectiveRefresh) {
    wp.customize.selectiveRefresh.bind('partial-content-rendered', function (placement) {
      const changedHeaderVariation = placement && 'null' !== placement.container[0].parentNode && 'header_variation' === placement.partial.id;

      if (changedHeaderVariation) {
        init();
      }
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7O0FBR0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTs7QUFHQTtBQUNBO0FBRUE7O0FBQUE7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUFBOztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUFBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUVBOztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0E7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7QUFDQTs7QUFHQTtBQUNBOztBQUdBO0FBQ0E7QUFFQTs7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFFQTs7Ozs7O0FDbGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL3NoYXJlZC9qcy9mcm9udGVuZC9jb21wb25lbnRzL3ByaW1hcnktbWVudS5qcyIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL3NoYXJlZC9qcy9mcm9udGVuZC9jb21wb25lbnRzL3NlYXJjaC10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vZ28vLi8uZGV2L2Fzc2V0cy9zaGFyZWQvanMvZnJvbnRlbmQvY29tcG9uZW50cy93b28tbWVudS1jYXJ0LmpzIiwid2VicGFjazovL2dvLy4vLmRldi9hc3NldHMvc2hhcmVkL2pzL2Zyb250ZW5kL3V0aWxpdHkvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vZ28vLi8uZGV2L2Fzc2V0cy9zaGFyZWQvanMvZnJvbnRlbmQvdmVuZG9yL3Jlc3BvbnNpdmUtbmF2LmpzIiwid2VicGFjazovL2dvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ28vLi8uZGV2L2Fzc2V0cy9zaGFyZWQvanMvZnJvbnRlbmQvZnJvbnRlbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIFRlblVwICovXG5pbXBvcnQgJy4uL3ZlbmRvci9yZXNwb25zaXZlLW5hdic7XG5cbi8qKlxuICogSG9vayB1cCBuYXZpZ2F0aW9uLlxuICovXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuXHRpZiAoIFRlblVwICkge1xuXHRcdFRlblVwLm5hdmlnYXRpb24oIHtcblx0XHRcdHRhcmdldDogJyNoZWFkZXJfX25hdmlnYXRpb24nLFxuXHRcdFx0dG9nZ2xlOiAnI25hdi10b2dnbGUnLFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cdFx0XHRzdWJfbWVudV9vcGVuOiBnb0Zyb250ZW5kLm9wZW5NZW51T25Ib3ZlciA/ICdob3ZlcicgOiAnY2xpY2snXG5cdFx0fSApO1xuXHR9XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBsb2NrTWVudUZvY3VzICk7XG59O1xuXG4vKipcbiAqIExvY2sgdGFiYmluZyB0byB0aGUgbWFpbiBuYXZpZ2F0aW9uIG9ubHkuXG4gKlxuICogQHBhcmFtIHtldmVudH0gZVxuICovXG5mdW5jdGlvbiBsb2NrTWVudUZvY3VzKCBlICkge1xuXHRpZiAoIFsgJ1NwYWNlJywgJ0VudGVyJywgJ1RhYicgXS5pbmNsdWRlc1sgZS5jb2RlIF0gfHwgISBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnYm9keScgKS5jbGFzc0xpc3QuY29udGFpbnMoICdtZW51LWlzLW9wZW4nICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6Zm9jdXMnICk7XG5cdGNvbnN0IGlzU2hpZnRUYWIgPSAoIGUuc2hpZnRLZXkgJiYgZS5jb2RlID09PSAnVGFiJyApO1xuXG5cdGlmICggZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdpZCcgKSA9PT0gJ25hdi10b2dnbGUnICkge1xuXHRcdGlmICggaXNTaGlmdFRhYiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAndWwucHJpbWFyeS1tZW51IGxpOmZpcnN0LWNoaWxkIGEnIClbIDAgXS5mb2N1cygpO1xuXHRcdH0sIDEwICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcbiIsImNvbnN0IHNlYXJjaFRvZ2dsZSA9ICgpID0+IHtcblx0Y29uc3Qgc2VhcmNoVG9nZ2xlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2hlYWRlcl9fc2VhcmNoLXRvZ2dsZScgKTtcblxuXHRpZiAoICEgc2VhcmNoVG9nZ2xlRWwgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGVyZm9ybVRvZ2dsZSA9ICggZWxlbWVudCApID0+IHtcblx0XHRjb25zdCB0b2dnbGUgPSBlbGVtZW50O1xuXHRcdGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHRvZ2dsZS5kYXRhc2V0LnRvZ2dsZVRhcmdldCApO1xuXG5cdFx0aWYgKCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnc2hvdy1tb2RhbCcgKSApIHtcblx0XHRcdC8vIEhpZGUgdGhlIG1vZGFsLlxuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUnICk7XG5cblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoICdzaG93LW1vZGFsJyApO1xuXHRcdFx0XHR0b2dnbGUuZm9jdXMoKTtcblx0XHRcdH0sIDI1MCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBTaG93IHRoZSBtb2RhbC5cblx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCAnc2hvdy1tb2RhbCcgKTtcblxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZCggJ2FjdGl2ZScgKTtcblxuXHRcdFx0XHRpZiAoIHRvZ2dsZS5kYXRhc2V0LnNldEZvY3VzICkge1xuXHRcdFx0XHRcdGNvbnN0IGZvY3VzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHRvZ2dsZS5kYXRhc2V0LnNldEZvY3VzICk7XG5cblx0XHRcdFx0XHRpZiAoIGZvY3VzRWxlbWVudCApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHNlYXJjaFRlcm0gPSBmb2N1c0VsZW1lbnQudmFsdWU7XG5cdFx0XHRcdFx0XHRmb2N1c0VsZW1lbnQudmFsdWUgPSAnJztcblx0XHRcdFx0XHRcdGZvY3VzRWxlbWVudC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0Zm9jdXNFbGVtZW50LnZhbHVlID0gc2VhcmNoVGVybTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwICk7XG5cdFx0fVxuXHR9O1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcqW2RhdGEtdG9nZ2xlLXRhcmdldF0nICkuZm9yRWFjaCggKCBlbGVtZW50ICkgPT4ge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCBldmVudCApID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwZXJmb3JtVG9nZ2xlKCBlbGVtZW50ICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Ly8gQ2xvc2UgbW9kYWwgb24gZXNjYXBlIGtleSBwcmVzcy5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleXVwJywgKCBldmVudCApID0+IHtcblx0XHRpZiAoIGV2ZW50LmtleUNvZGUgPT09IDI3ICkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuc2VhcmNoLW1vZGFsLmFjdGl2ZScgKS5mb3JFYWNoKCAoIGVsZW1lbnQgKSA9PiB7XG5cdFx0XHRcdHBlcmZvcm1Ub2dnbGUoXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJypbZGF0YS10b2dnbGUtdGFyZ2V0PVwiJyArIGVsZW1lbnQuZGF0YXNldC5tb2RhbFRhcmdldFN0cmluZyArICdcIl0nIClcblx0XHRcdFx0KTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0gKTtcblxuXHQvLyBDbG9zZSBtb2RhbCBvbiBvdXRzaWRlIGNsaWNrLlxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoIGV2ZW50ICkgPT4ge1xuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc2VhcmNoLW1vZGFsLmFjdGl2ZScgKTtcblxuXHRcdGlmICggdGFyZ2V0ID09PSBtb2RhbCApIHtcblx0XHRcdHBlcmZvcm1Ub2dnbGUoXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcqW2RhdGEtdG9nZ2xlLXRhcmdldD1cIicgKyBtb2RhbC5kYXRhc2V0Lm1vZGFsVGFyZ2V0U3RyaW5nICsgJ1wiXScgKVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gKTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIGxvY2tTZWFyY2hGb2N1cyApO1xufTtcblxuLyoqXG4gKiBMb2NrIHRhYmJpbmcgdG8gdGhlIHNlYXJjaCBmb3JtIG9ubHkuXG4gKlxuICogQHBhcmFtIHtldmVudH0gZVxuICovXG5mdW5jdGlvbiBsb2NrU2VhcmNoRm9jdXMoIGUgKSB7XG5cdC8vIElmIHRoZSBrZXlwcmVzcyBpc24ndCBhIHRhYiBvciB0aGUgc2VhcmNoIGZvcm0gaXNuJ3QgYWN0aXZlLCByZXR1cm5cblx0aWYgKCBlLmtleUNvZGUgIT09IDkgfHwgISBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnNpdGUtc2VhcmNoLmFjdGl2ZScgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBDdXJyZW50IGFjdGl2ZSBlbGVtZW50IGJlZm9yZSBpdCBtb3Zlc1xuXHRjb25zdCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuXHQvLyBJZiB3ZSdyZSBvbiB0aGUgaW5wdXQgYW5kIHNoaWZ0K3RhYiB3YXMgcHJlc3NlZCwgb3ZlcnJpZGUgYW5kIGZvY3VzIG9uIGJ1dHRvbi5cblx0aWYgKCBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3NlYXJjaC1mb3JtX19pbnB1dCcgKSAmJiBlLnNoaWZ0S2V5ICkge1xuXHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gRm9jdXMgdGhlIGNvcnJlY3QgYnV0dG9uIGJ5IG9ubHkgbG9va2luZyBmb3IgaXQgaW4gdGhlIHBhcmVudCBlbGVtZW50XG5cdFx0XHRhY3RpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ3NlYXJjaC1pbnB1dF9fYnV0dG9uJyApLml0ZW0oIDAgKS5mb2N1cygpO1xuXHRcdH0sIDEwICk7XG5cdH1cblxuXHQvLyBJZiB3ZSdyZSBvbiB0aGUgYnV0dG9uIGFuZCB0YWIgd2FzIHByZXNzZWQsIG92ZXJyaWRlIGFuZCBmb2N1cyBvbiBpbnB1dC5cblx0aWYgKCBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3NlYXJjaC1pbnB1dF9fYnV0dG9uJyApICYmICEgZS5zaGlmdEtleSApIHtcblx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdC8vIEZvY3VzIHRoZSBjb3JyZWN0IGlucHV0IGJ5IG9ubHkgbG9va2luZyBmb3IgaXQgaW4gdGhlIHBhcmVudCBlbGVtZW50XG5cdFx0XHRhY3RpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ3NlYXJjaC1mb3JtX19pbnB1dCcgKS5pdGVtKCAwICkuZm9jdXMoKTtcblx0XHR9LCAxMCApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFRvZ2dsZTtcbiIsImNvbnN0IG1lbnVPYmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2hlYWRlcl9fY2FydC10b2dnbGUnICk7XG5jb25zdCBzaXRlT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2l0ZS1vdmVybGF5JyApO1xuY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2l0ZS1uYXYtLWNhcnQnICk7XG5jb25zdCBzaWRlTmF2Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NpdGUtY2xvc2UtaGFuZGxlJyApO1xuXG5jb25zdCB3b29NZW51Q2FydCA9ICgpID0+IHtcblx0aWYgKFxuXHRcdG51bGwgPT09IG1lbnVPYmplY3QgfHxcblx0XHRudWxsID09PSBzaXRlT3ZlcmxheSB8fFxuXHRcdG51bGwgPT09IHNpZGVOYXZDbG9zZVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoICdoYXMtd29vLWNhcnQtc2xpZGVvdXQnICk7XG5cblx0bWVudU9iamVjdC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0b2dnbGVTaWRlTmF2VmlzaWJpbGl0eSgpO1xuXHR9ICk7XG5cblx0c2l0ZU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdG9nZ2xlU2lkZU5hdlZpc2liaWxpdHkgKTtcblx0c2lkZU5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRvZ2dsZVNpZGVOYXZWaXNpYmlsaXR5ICk7XG59O1xuXG5jb25zdCB0b2dnbGVTaWRlTmF2VmlzaWJpbGl0eSA9ICgpID0+IHtcblx0c2lkZU5hdi5jbGFzc0xpc3QudG9nZ2xlKCAnYWN0aXZlJyApO1xuXHRzaXRlT3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCAnYWN0aXZlJyApO1xuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoICdzaWRlYmFyLW1vdmUnICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3b29NZW51Q2FydDtcbiIsIi8qKlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgICAgICBGdW50aW9uIHRvIHJ1biBhZ2FpbnN0LlxuICogQHBhcmFtIHtudW1iZXJ9ICAgd2FpdCAgICAgIEFtb3VudCB0byB3YWl0XG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBpbW1lZGlhdGUgVHJpZ2dlciBvbiBsZWFkaW5nIGVkZ2U/XG4gKi9cbmNvbnN0IGRlYm91bmNlID0gKCBmdW5jLCB3YWl0LCBpbW1lZGlhdGUgKSA9PiB7XG5cdGxldCB0aW1lb3V0O1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXHRcdGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXG5cdFx0LyoqXG5cdFx0ICogTGF0ZXJcblx0XHQgKi9cblx0XHRjb25zdCBsYXRlciA9ICgpID0+IHtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0aWYgKCAhIGltbWVkaWF0ZSApIHtcblx0XHRcdFx0ZnVuYy5hcHBseSggY29udGV4dCwgYXJncyApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICEgdGltZW91dDtcblxuXHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KCBsYXRlciwgd2FpdCApO1xuXHRcdGlmICggY2FsbE5vdyApIHtcblx0XHRcdGZ1bmMuYXBwbHkoIGNvbnRleHQsIGFyZ3MgKTtcblx0XHR9XG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWJvdW5jZTtcbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi4vdXRpbGl0eS9kZWJvdW5jZVwiO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuXHROYW1lOiBXb3JkUHJlc3MgQWNjZXNzaWJsZSBSZXNwb25zaXZlIE5hdmlnYXRpb24gTWVudVxuXHRVc2FnZTpcblxuXHRUZW5VcC5idWlsZF9tZW51KHtcblxuXHRcdCd0YXJnZXQnXHRcdDpcdCcjcHJpbWFyeS1uYXYnLCAgICAgIC8vIHRoZSBzZWxlY3RvciBvZiB0aGUgbmF2IG1lbnUgPHVsPlxuXHRcdCd0b2dnbGUnXHRcdDpcdCcjanMtbWVudS10b2dnbGUnLCAgIC8vIHRoZSBJRCBvZiB0aGUgbGluayB5b3UncmUgdXNpbmcgdG8gb3Blbi9jbG9zZSB0aGUgc21hbGwgc2NyZWVuIG1lbnVcblx0XHQnc3ViX21lbnVfb3BlbidcdDpcdCdob3ZlcidcblxuXHR9LCBmdW5jdGlvbigpIHtcblxuXHRcdGNvbnNvbGUubG9nKCdBbWF6aW5nIGNhbGxiYWNrIGZ1bmN0aW9uIScpO1xuXG5cdH0pO1xuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4oIGZ1bmN0aW9uKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvLyBEZWZpbmUgZ2xvYmFsIFRlblVwIG9iamVjdCBpZiBpdCBkb2Vzbid0IGV4aXN0XG5cdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiB3aW5kb3cuVGVuVXAgKSB7XG5cdFx0d2luZG93LlRlblVwID0ge307XG5cdH1cblxuXHQvKlxuXHRcdENhY2hlIGFuZCBkZWZpbmUgc29tZSB2YXJpYWJsZXNcblx0Ki9cblxuXHQvLyBpbml0IGZ1bmN0aW9uXG5cdFRlblVwLm5hdmlnYXRpb24gPSBmdW5jdGlvbiggb3B0aW9ucywgY2FsbGJhY2sgKSB7XG5cblx0XHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0XHQndGFyZ2V0J1x0XHQ6XHQnI3ByaW1hcnktbmF2Jyxcblx0XHRcdCd0b2dnbGUnXHRcdDpcdCcjanMtbWVudS10b2dnbGUnLFxuXHRcdFx0J3N1Yl9tZW51X29wZW4nXHQ6XHQnaG92ZXInXG5cdFx0fTtcblx0XHR2YXIgb3B0O1xuXG5cdFx0Ly8gTWFwIGFsbCBkZWZhdWx0IHNldHRpbmdzIHRvIHVzZXIgZGVmaW5lZCBvcHRpb25zIGlmIHRoZXkgZXhpc3Rcblx0XHRmb3IgKCBvcHQgPSAwOyBvcHQgPCBkZWZhdWx0cy5sZW5ndGg7IG9wdCA9IG9wdCArIDEgKSB7XG5cblx0XHRcdGlmKCB0eXBlb2Ygb3B0aW9uc1tvcHRdID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0b3B0aW9uc1tvcHRdID0gZGVmYXVsdHNbb3B0XTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHZhciBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggb3B0aW9ucy50YXJnZXQgKTtcblxuXHRcdC8vIEJhaWwgb3V0IGlmIHRoZXJlJ3Mgbm8gbWVudVxuXHRcdGlmICggISBtZW51ICkgeyByZXR1cm47IH1cblxuXHRcdHZhciBtZW51X2lkID0gbWVudS5nZXRBdHRyaWJ1dGUoICdpZCcgKTtcblx0XHR2YXIgbWVudV90b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBvcHRpb25zLnRvZ2dsZSApO1xuXHRcdHZhciBhcmlhX2NvbnRyb2xzID0gbWVudV90b2dnbGUuZ2V0QXR0cmlidXRlKCAnYXJpYS1jb250cm9scycgKTtcblx0XHR2YXIgc3ViX21lbnVfYWNpb24gPSBvcHRpb25zLnN1Yl9tZW51X29wZW47XG5cdFx0dmFyIGN1cnJlbnRfbWVudV9pdGVtID0gbWVudS5xdWVyeVNlbGVjdG9yKCAnLmN1cnJlbnQtbWVudS1pdGVtJyApO1xuXHRcdHZhciBtZW51X2l0ZW1zX2xpbmtzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCAnLm1lbnUtaXRlbSA+IGEnICk7XG5cdFx0dmFyIG1lbnVfaXRlbXNfbGlua3NfY291bnQgPSBtZW51X2l0ZW1zX2xpbmtzLmxlbmd0aDtcblx0XHR2YXIgbWVudV9pdGVtc193aXRoX2NoaWxkcmVuID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nICk7XG5cdFx0dmFyIG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbl9jb3VudCA9IG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbi5sZW5ndGg7XG5cdFx0dmFyIGN1cnJlbnRUYXJnZXQ7XG5cdFx0dmFyIHRhcmdldDtcblx0XHR2YXIgaTtcblxuXHRcdC8vIExpc3RlbmVyIGZvciB0aGUgbWVudSBvcGVuL2Nsb3NlIGFjdGlvblxuXHRcdGZ1bmN0aW9uIGxpc3RlbmVyX21lbnUoIGUgKSB7XG5cblx0XHRcdC8vIFN0b3AgbGlua3MgZnJvbSBmaXJpbmdcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyggJ21lbnUtaXMtb3BlbicgKSApIHtcblx0XHRcdFx0Ly8gQ2xvc2UgdGhlIG1lbnVcblx0XHRcdFx0bWVudS5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuXHRcdFx0XHRtZW51X3RvZ2dsZS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xuXG5cdFx0XHRcdC8vIEJ1YmJsZSB0byB0aGUgZG9jdW1lbnRcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnbWVudS1pcy1vcGVuJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gT3BlbiB0aGUgbWVudVxuXHRcdFx0XHRtZW51LnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyApO1xuXHRcdFx0XHRtZW51X3RvZ2dsZS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7XG5cblx0XHRcdFx0Ly8gU2V0IGZvY3VzIHRvIHRoZSBmaXJzdCBsaW5rXG5cdFx0XHRcdG1lbnUucXVlcnlTZWxlY3RvckFsbCggJ2EnIClbMF0uZm9jdXMoKTtcblxuXHRcdFx0XHQvLyBCdWJibGUgdG8gdGhlIGRvY3VtZW50XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggJ21lbnUtaXMtb3BlbicgKTtcblx0XHRcdH1cblxuXHRcdH07IC8vIGxpc3RlbmVyX21lbnUoKVxuXG5cdFx0Ly8gTGlzdGVuZXIgZm9yIHN1Ym1lbnUgb24gY2xpY2tcblx0XHRmdW5jdGlvbiBsaXN0ZW5lcl9zdWJtZW51X2NsaWNrKCBlICkge1xuXG5cdFx0XHRjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuXHRcdFx0dGFyZ2V0ID0gZS50YXJnZXQ7XG5cblx0XHRcdGlmICggdGFyZ2V0LnRhZ05hbWUgPT09ICdzdmcnIHx8IHRhcmdldC50YWdOYW1lID09PSAncGF0aCcgKSB7XG5cdFx0XHRcdHRhcmdldCA9IGN1cnJlbnRUYXJnZXQuY2xvc2VzdCggJy5tZW51LWl0ZW0gPiBhJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coIHRhcmdldC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLmhyZWYgKTtcblx0XHRcdFx0aWYgKCBnb0Zyb250ZW5kLmlzTW9iaWxlICkge1xuXHRcdFx0XHRcdGlmICggdGFyZ2V0LnRhZ05hbWUgPT09ICdBJyApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCB0YXJnZXQudGFnTmFtZSA9PT0gJ1VMJyApIHtcblx0XHRcdFx0XHRcdGxldCB0ZW1wVVJMID0gdGFyZ2V0LnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcuaHJlZjtcblx0XHRcdFx0XHRcdGlmICggbnVsbCAhPT0gdGVtcFVSTCApIHtcblx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB0ZW1wVVJMO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdGFyZ2V0LmdldEF0dHJpYnV0ZSggJ2FyaWEtaGFzcG9wdXAnICkgKSB7XG5cdFx0XHRcdC8vIFN0b3AgbGlua3MgZnJvbSBmaXJpbmdcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdC8vIFN0b3AgZXZlbnRzIGZyb20gYnViYmxpbmcgdXAgdG8gcGFyZW50IGVsZW1lbnRzXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0dmFyIHBhcmVudF9tZW51ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0XHRcdHZhciBzdWJfbWVudSA9IHBhcmVudF9tZW51LnF1ZXJ5U2VsZWN0b3IoICcuc3ViLW1lbnUnICk7XG5cdFx0XHRcdHZhciBhbGxfb3Blbl9tZW51cyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCggJy5jaGlsZC1oYXMtZm9jdXMnICk7XG5cdFx0XHRcdHZhciBhbGxfb3Blbl9tZW51c19jb3VudCA9IGFsbF9vcGVuX21lbnVzLmxlbmd0aDtcblx0XHRcdFx0dmFyIGFsbF9vcGVuX21lbnVfdHJpZ2dlcnMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2hpbGQtaGFzLWZvY3VzID4gYS5zdWJtZW51LWlzLW9wZW4nICk7XG5cdFx0XHRcdHZhciBhbGxfb3Blbl9tZW51X3RyaWdnZXJzX2NvdW50ID0gYWxsX29wZW5fbWVudV90cmlnZ2Vycy5sZW5ndGg7XG5cdFx0XHRcdHZhciB0O1xuXG5cdFx0XHRcdGlmICggZ2V0X3NjcmVlbl9zaXplKCAnaGFzLWZ1bGwtbmF2JyApICkge1xuXHRcdFx0XHRcdGlmICggYWxsX29wZW5fbWVudV90cmlnZ2Vyc19jb3VudCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQvLyBNYWtlIHN1cmUgb25seSAxIG1lbnUgaXRlbSBjYW4gYmUgb3BlbmVkIGF0IGEgdGltZVxuXHRcdFx0XHRcdFx0Zm9yICggdCA9IDA7IHQgPCBhbGxfb3Blbl9tZW51X3RyaWdnZXJzX2NvdW50OyB0ID0gdCArIDEgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIG9wZW4gbWVudSBpcyB0b3AtbGV2ZWwsIGlmIHNvLCBjbG9zZSBpdFxuXHRcdFx0XHRcdFx0XHRpZiAoIHBhcmVudF9tZW51LnBhcmVudE5vZGUgPT09IG1lbnUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVudV9zdWJfY2xvc2UoIGFsbF9vcGVuX21lbnVfdHJpZ2dlcnNbdF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSAvLyBmb3Jcblx0XHRcdFx0XHR9IC8vIGlmXG5cdFx0XHRcdH0gLy8gaWZcblxuXHRcdFx0XHRpZiAoICggZS50YXJnZXQubm9kZU5hbWUgPT09ICdBJyB8fCB0YXJnZXQudGFnTmFtZSA9PT0gJ0EnICkgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3N1Ym1lbnUtaXMtb3BlbicgKSApIHtcblx0XHRcdFx0XHQvLyBUaGUgbWVudSBpcyBhbHJlYWR5IG9wZW4sIHNvIHRoaXMgc2hvdWxkIGJlIGEgY2xvc2UgYWN0aW9uXG5cdFx0XHRcdFx0bWVudV9zdWJfY2xvc2UoIHRhcmdldCApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lbnVfc3ViX2Nsb3NlX2FsbCgpO1xuXHRcdFx0XHRcdC8vIFRoZSBtZW51IGlzIGNsb3NlZCwgc28gdGhpcyBjbGljayBzaG91bGQgb3BlbiBpdFxuXHRcdFx0XHRcdG1lbnVfc3ViX29wZW4oIHRhcmdldCApO1xuXG5cdFx0XHRcdFx0Ly8gUmVzZXQgdGhlIGZvY3VzXG5cdFx0XHRcdFx0c3ViX21lbnUucXVlcnlTZWxlY3RvckFsbCgnYScpWzBdLmZvY3VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9OyAvLyBsaXN0ZW5lcl9zdWJtZW51X2NsaWNrKClcblxuXHRcdC8vIExpc3RlbmVyIGZvciBzYW1lIHBhZ2UgbGluayAoaGFzaCkgY2xpY2tcblx0XHRmdW5jdGlvbiBsaXN0ZW5lcl9oYXNoX2NsaWNrKCkge1xuXG5cdFx0XHQvLyBDbG9zZSB0aGUgbWVudVxuXHRcdFx0bWVudS5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuXHRcdFx0bWVudV90b2dnbGUuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblxuXHRcdFx0Ly8gQnViYmxlIHRvIHRoZSBkb2N1bWVudFxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnbWVudS1pcy1vcGVuJyApO1xuXHRcdH07XG5cblx0XHQvLyBXaGVuIFwiaG92ZXJcIiwgdGhpcyBpcyBob3cgZm9jdXMgc2hvdWxkIGFjdFxuXHRcdGZ1bmN0aW9uIGxpc3RlbmVyX3N1Ym1lbnVfZm9jdXMoIGUgKSB7XG5cblx0XHRcdHZhciBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuXHRcdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuXHRcdFx0dmFyIHBhcmVudF9tZW51ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0XHR2YXIgc3ViX21lbnUgPSBwYXJlbnRfbWVudS5xdWVyeVNlbGVjdG9yKCAnLnN1Yi1tZW51JyApO1xuXHRcdFx0dmFyIGFsbF9vcGVuX21lbnVfdHJpZ2dlcnMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2hpbGQtaGFzLWZvY3VzID4gYS5zdWJtZW51LWlzLW9wZW4nICk7XG5cdFx0XHR2YXIgYWxsX29wZW5fbWVudV90cmlnZ2Vyc19jb3VudCA9IGFsbF9vcGVuX21lbnVfdHJpZ2dlcnMubGVuZ3RoO1xuXHRcdFx0dmFyIHQ7XG5cblx0XHRcdGlmICggZ2V0X3NjcmVlbl9zaXplKCAnaGFzLWZ1bGwtbmF2JyApICkge1xuXHRcdFx0XHRpZiAoIGFsbF9vcGVuX21lbnVfdHJpZ2dlcnNfY291bnQgPiAwICkge1xuXHRcdFx0XHRcdC8vIE1ha2Ugc3VyZSBvbmx5IDEgbWVudSBpdGVtIGNhbiBiZSBvcGVuZWQgYXQgYSB0aW1lXG5cdFx0XHRcdFx0Zm9yICggdCA9IDA7IHQgPCBhbGxfb3Blbl9tZW51X3RyaWdnZXJzX2NvdW50OyB0ID0gdCArIDEgKSB7XG5cdFx0XHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgb3BlbiBtZW51IGlzIHRvcC1sZXZlbCwgaWYgc28sIGNsb3NlIGl0XG5cdFx0XHRcdFx0XHRpZiAoIHBhcmVudF9tZW51LnBhcmVudE5vZGUgPT09IG1lbnUgKSB7XG5cdFx0XHRcdFx0XHRcdG1lbnVfc3ViX2Nsb3NlKCBhbGxfb3Blbl9tZW51X3RyaWdnZXJzW3RdICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW51X3N1Yl9vcGVuKCB0YXJnZXQgKTtcblx0XHR9O1xuXG5cdFx0Ly8gTGlzdGVuZXIgZm9yIHRoZSB3aW5kb3cgcmVzaXplXG5cdFx0dmFyIGxpc3RlbmVyX3dpbmRvdyA9IGRlYm91bmNlKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGlmKCBnZXRfc2NyZWVuX3NpemUoICdoYXMtb2Zmc2NyZWVuLW5hdicgKSApIHtcblx0XHRcdFx0bWVudV9jcmVhdGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lbnVfZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdH0sIDEwMCApOyAvLyBsaXN0ZW5lcl93aW5kb3coKVxuXG5cdFx0Ly8gQ2xvc2UgdGhlIG1lbnUgaWYgeW91IGNsaWNrIHNvbWV3aGVyZSBlbHNlXG5cdFx0ZnVuY3Rpb24gbGlzdGVuZXJfY2xvc2Vfb3Blbl9tZW51cyggZSApIHtcblxuXHRcdFx0dmFyIG9wZW5fbWVudXMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51LWlzLW9wZW4nKTtcblx0XHRcdHZhciBvcGVuX21lbnVzX2NvdW50ID0gb3Blbl9tZW51cy5sZW5ndGg7XG5cdFx0XHR2YXIgb3BuO1xuXG5cdFx0XHQvLyBpZiB0aGUgZXZlbnQgaXMga2V5dXAgYW5kIGl0IHdhcyB0aGUgRVNDIGtleVxuXHRcdFx0aWYgKCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS5rZXlDb2RlID09IDI3ICkge1xuXG5cdFx0XHRcdC8vIFdlIHdlcmUgZ2V0dGluZyBzb21lIGVycm9ycywgc28gbGV0J3MgYWRkIGluIGEgY2hlY2twb2ludFxuXHRcdFx0XHRpZiAoIG9wZW5fbWVudXNfY291bnQgKSB7XG5cblx0XHRcdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBvcGVuIG1lbnVzIGFuZCBjbG9zZSB0aGVtXG5cdFx0XHRcdFx0Zm9yICggb3BuID0gMDsgb3BuIDwgb3Blbl9tZW51cy5sZW5ndGg7IG9wbiA9IG9wbiArIDEgKSB7XG5cblx0XHRcdFx0XHRcdG1lbnVfc3ViX2Nsb3NlKCBvcGVuX21lbnVzW29wbl0gKTtcblxuXHRcdFx0XHRcdH0gLy8gZm9yXG5cblx0XHRcdFx0XHQvLyBSZXR1cm4gZm9jdXMgdG8gdGhlIGZpcnN0IG9wZW4gbWVudVxuXHRcdFx0XHRcdGlmICggc3ViX21lbnVfYWNpb24gPT09ICdjbGljaycgKSB7XG5cdFx0XHRcdFx0XHRvcGVuX21lbnVzWzBdLmZvY3VzKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gLy8gaWZcblxuXHRcdFx0Ly8gSWYgdGhlIGV2ZW50IHdhcyBhIG1vdXNldXBcblx0XHRcdH0gZWxzZSBpZiAoIGUudHlwZSA9PT0gJ21vdXNldXAnICkge1xuXG5cdFx0XHRcdGlmICggISBtZW51LmNvbnRhaW5zKCBlLnRhcmdldCApICYmIG1lbnUucXVlcnlTZWxlY3RvciggJy5zdWJtZW51LWlzLW9wZW4nICkgKSB7XG5cdFx0XHRcdFx0Ly8gV2Ugd2VyZSBnZXR0aW5nIHNvbWUgZXJyb3IsIHNvIGxldCdzIGFkZCBpbiBhIHNlY29uZCBjaGVja3BvaW50XG5cdFx0XHRcdFx0aWYgKCBvcGVuX21lbnVzX2NvdW50ICkge1xuXHRcdFx0XHRcdFx0Zm9yKCBvcG4gPSAwOyBvcG4gPCBvcGVuX21lbnVzLmxlbmd0aDsgb3BuID0gb3BuICsgMSApIHtcblx0XHRcdFx0XHRcdFx0bWVudV9zdWJfY2xvc2UoIG9wZW5fbWVudXNbb3BuXSApO1xuXHRcdFx0XHRcdFx0fSAvLyBmb3Jcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gLy8gaWZcblx0XHRcdH1cblx0XHR9OyAvLyBsaXN0ZW5lcl9jbG9zZV9vcGVuX21lbnVzKClcblxuXHRcdGZ1bmN0aW9uIG1lbnVfc3ViX2Nsb3NlKCBvcGVuX2l0ZW0gKSB7XG5cdFx0XHRpZiAoIG9wZW5faXRlbSAmJiBvcGVuX2l0ZW0uY2xhc3NMaXN0ICkge1xuXHRcdFx0XHRvcGVuX2l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc3VibWVudS1pcy1vcGVuJyk7XG5cdFx0XHRcdG9wZW5faXRlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2NoaWxkLWhhcy1mb2N1cycpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG9wZW5faXRlbSAmJiBvcGVuX2l0ZW0ucGFyZW50Tm9kZSAmJiBvcGVuX2l0ZW0ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCAnLnN1Yi1tZW51JyApICkge1xuXHRcdFx0XHRvcGVuX2l0ZW0ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCAnLnN1Yi1tZW51JyApLnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG5cdFx0XHR9XG5cdFx0fTsgLy8gbWVudV9zdWJfY2xvc2UoKVxuXG5cdFx0ZnVuY3Rpb24gbWVudV9zdWJfY2xvc2VfYWxsKCkge1xuXHRcdFx0dmFyIG9wZW5fbWVudXMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoICcuc3VibWVudS1pcy1vcGVuJyApO1xuXHRcdFx0dmFyIG9wZW5fbWVudXNfY291bnQgPSBvcGVuX21lbnVzLmxlbmd0aDtcblx0XHRcdHZhciBvcG47XG5cdFx0XHQvLyBXZSB3ZXJlIGdldHRpbmcgc29tZSBlcnJvcnMsIHNvIGxldCdzIGFkZCBpbiBhIGNoZWNrcG9pbnRcblx0XHRcdGlmICggb3Blbl9tZW51c19jb3VudCApIHtcblx0XHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgb3BlbiBtZW51cyBhbmQgY2xvc2UgdGhlbVxuXHRcdFx0XHRmb3IgKCBvcG4gPSAwOyBvcG4gPCBvcGVuX21lbnVzLmxlbmd0aDsgb3BuID0gb3BuICsgMSApIHtcblx0XHRcdFx0XHRtZW51X3N1Yl9jbG9zZSggb3Blbl9tZW51c1tvcG5dICk7XG5cdFx0XHRcdH0gLy8gZm9yXG5cdFx0XHR9IC8vIGlmXG5cdFx0fTsgLy8gbWVudV9zdWJfY2xvc2UoKVxuXG5cdFx0ZnVuY3Rpb24gbWVudV9zdWJfb3BlbiggY2xvc2VkX2l0ZW0gKSB7XG5cdFx0XHRjbG9zZWRfaXRlbS5jbGFzc0xpc3QuYWRkKCAnc3VibWVudS1pcy1vcGVuJyApO1xuXHRcdFx0Y2xvc2VkX2l0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCAnY2hpbGQtaGFzLWZvY3VzJyApO1xuXG5cdFx0XHRpZiAoIGNsb3NlZF9pdGVtLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvciggJy5zdWItbWVudScgKSApIHtcblx0XHRcdFx0Y2xvc2VkX2l0ZW0ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCAnLnN1Yi1tZW51JyApLnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyApO1xuXHRcdFx0fVxuXHRcdH07IC8vIG1lbnVfc3ViX29wZW4oKVxuXG5cdFx0Ly8gTWV0aG9kIHRvIGNyZWF0ZSB0aGUgc21hbGwgc2NyZWVuIG1lbnVcblx0XHRmdW5jdGlvbiBtZW51X2NyZWF0ZSgpIHtcblxuXHRcdFx0aWYgKCAhIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCAnaGFzLW9mZnNjcmVlbi1uYXYnICkgKSB7XG5cblx0XHRcdFx0aWYgKCAhIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCAnbWVudS1pcy1vcGVuJyApICkge1xuXHRcdFx0XHRcdG1lbnUuc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcblx0XHRcdFx0XHRtZW51X3RvZ2dsZS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lbnUuc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAnZmFsc2UnICk7XG5cdFx0XHRcdFx0bWVudV90b2dnbGUuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCBzdWJtZW51cyBhbmQgYmluZCBldmVudHMgd2hlbiBuZWVkZWRcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5fY291bnQ7IGkrKyApIHtcblx0XHRcdFx0XHR2YXIgc3ZnRWxlbWVudHMgPSBtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5baV0ucXVlcnlTZWxlY3RvckFsbCggJ3N2ZycgKTtcblx0XHRcdFx0XHRmb3IgKCB2YXIgcSA9IDA7IHEgPCBzdmdFbGVtZW50cy5sZW5ndGg7IHEgPSBxICsgMSApIHtcblx0XHRcdFx0XHRcdHN2Z0VsZW1lbnRzW3FdLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGxpc3RlbmVyX3N1Ym1lbnVfY2xpY2sgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bWVudV9pdGVtc193aXRoX2NoaWxkcmVuW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdmb2N1c2luJywgbGlzdGVuZXJfc3VibWVudV9mb2N1cyApO1xuXHRcdFx0XHR9IC8vIGZvclxuXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgbGlua3MgZm9yIGhhc2ggYW5kIGJpbmQgZXZlbnRzIHdoZW4gbmVlZGVkXG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbWVudV9pdGVtc19saW5rc19jb3VudDsgaSsrICkge1xuXHRcdFx0XHRcdGlmICggbWVudV9pdGVtc19saW5rc1tpXS5oYXNoICYmIG1lbnVfaXRlbXNfbGlua3NbaV0ucGF0aG5hbWUgPT09ICcvJyApIHtcblx0XHRcdFx0XHRcdG1lbnVfaXRlbXNfbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgbGlzdGVuZXJfaGFzaF9jbGljayApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSAvLyBmb3JcblxuXHRcdFx0XHQvLyBCaW5kIHRoZSBldmVudFxuXHRcdFx0XHRtZW51X3RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBsaXN0ZW5lcl9tZW51ICk7XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBib2R5IGNsYXNzIHRvIHByZXZlbnQgdGhpcyBmcm9tIHJ1bm5pbmcgYWdhaW5cblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaGFzLW9mZnNjcmVlbi1uYXYnICk7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ2hhcy1mdWxsLW5hdicgKTtcblx0XHRcdH1cblx0XHR9OyAvLyBtZW51X2NyZWF0ZSgpXG5cblx0XHQvLyBNZXRob2QgdG8gZGVzdHJveSB0aGUgc21hbGwgc2NyZWVuIG1lbnVcblx0XHRmdW5jdGlvbiBtZW51X2Rlc3Ryb3koKSB7XG5cblx0XHRcdHZhciB0bXBfb3BlblxuXHRcdFx0dmFyIHRtcF9vcGVuX2NvdW50XG5cdFx0XHR2YXIgdDtcblxuXHRcdFx0aWYgKCAhIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCAnaGFzLWZ1bGwtbmF2JyApICkge1xuXHRcdFx0XHQvLyBSZW1vdmUgYXJpYS1oaWRkZW4sIGJlY2F1c2Ugd2UgZG9uJ3QgbmVlZCBpdC5cblx0XHRcdFx0bWVudS5yZW1vdmVBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicgKTtcblxuXHRcdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIHN1Ym1lbnVzIGFuZCBiaW5kIGV2ZW50cyB3aGVuIG5lZWRlZFxuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbl9jb3VudDsgaSA9IGkgKyAxICkge1xuXHRcdFx0XHRcdGlmICggc3ViX21lbnVfYWNpb24gIT09ICdjbGljaycgKSB7XG5cdFx0XHRcdFx0XHRtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5baV0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgbGlzdGVuZXJfc3VibWVudV9jbGljayApO1xuXHRcdFx0XHRcdFx0bWVudV9pdGVtc193aXRoX2NoaWxkcmVuW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1c2luJywgbGlzdGVuZXJfc3VibWVudV9mb2N1cyApO1xuXHRcdFx0XHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCd1c2VzLWNsaWNrJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgd2UncmUgbm90IHVzaW5nIGNsaWNrLCB0aGUgb3BlbiBtZW51cyBuZWVkIHRvIGJlIHJlc2V0XG5cdFx0XHRcdGlmICggc3ViX21lbnVfYWNpb24gIT09ICdjbGljaycgKSB7XG5cdFx0XHRcdFx0dG1wX29wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hpbGQtaGFzLWZvY3VzJyk7XG5cdFx0XHRcdFx0dG1wX29wZW5fY291bnQgPSB0bXBfb3Blbi5sZW5ndGg7XG5cblx0XHRcdFx0XHRmb3IgKCB0ID0gMDsgdCA8IHRtcF9vcGVuX2NvdW50OyB0ID0gdCArIDEgKSB7XG5cdFx0XHRcdFx0XHR0bXBfb3Blblt0XS5jbGFzc0xpc3QucmVtb3ZlKCAnY2hpbGQtaGFzLWZvY3VzJyApO1xuXHRcdFx0XHRcdFx0dG1wX29wZW5bdF0ucXVlcnlTZWxlY3RvciggJy5zdWJtZW51LWlzLW9wZW4nICkuY2xhc3NMaXN0LnJlbW92ZSggJ3N1Ym1lbnUtaXMtb3BlbicgKTtcblx0XHRcdFx0XHRcdHRtcF9vcGVuW3RdLnF1ZXJ5U2VsZWN0b3IoICcuc3ViLW1lbnUnICkuc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBVbmJpbmQgdGhlIGV2ZW50XG5cdFx0XHRcdG1lbnVfdG9nZ2xlLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIGxpc3RlbmVyX21lbnUgKTtcblxuXHRcdFx0XHQvLyBBZGQgdGhlIGJvZHkgY2xhc3MgdG8gcHJldmVudCB0aGlzIGZyb20gcnVubmluZyBhZ2FpblxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoICdoYXMtZnVsbC1uYXYnICk7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ2hhcy1vZmZzY3JlZW4tbmF2JyApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBDaGVjayBpbml0IG1lbnUgc3RhdGVcblx0XHRpZiAoIGdldF9zY3JlZW5fc2l6ZSggJ2hhcy1vZmZzY3JlZW4tbmF2JyApICkge1xuXHRcdFx0bWVudV9jcmVhdGUoKTtcblx0XHR9XG5cblx0XHQvLyBJZiBhcmlhLWNvbnRyb2xzIGlzbid0IHNldCwgc2V0IGl0XG5cdFx0aWYgKCAhIGFyaWFfY29udHJvbHMgKSB7XG5cdFx0XHRtZW51X3RvZ2dsZS5zZXRBdHRyaWJ1dGUoICdhcmlhLWNvbnRyb2xzJywgbWVudV9pZCApO1xuXHRcdH1cblxuXHRcdGlmICggY3VycmVudF9tZW51X2l0ZW0gKSB7XG5cdFx0XHRjdXJyZW50X21lbnVfaXRlbS5xdWVyeVNlbGVjdG9yKCAnYScgKS5zZXRBdHRyaWJ1dGUoICdhcmlhLWN1cnJlbnQnLCAncGFnZScgKTtcblx0XHR9XG5cblx0XHQvKlxuXHRcdFx0RXZlbnRzXG5cdFx0Ki9cblxuXHRcdC8vIERlYm91bmNlZCByZXNpemUgZXZlbnQgdG8gY3JlYXRlIGFuZCBkZXN0cm95IHRoZSBzbWFsbCBzY3JlZW4gbWVudSBvcHRpb25zXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBsaXN0ZW5lcl93aW5kb3cgKTtcblxuXHRcdC8vIENsb3NlIHRoZSBzdWJtZW51cyBieSBjbGlja2luZyBvZmYgb2YgdGhlbSBvciBoaXR0aW5nIEVTQ1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgbGlzdGVuZXJfY2xvc2Vfb3Blbl9tZW51cyApO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIGxpc3RlbmVyX2Nsb3NlX29wZW5fbWVudXMgKTtcblxuXHRcdC8qXG5cdFx0XHRIaWRpbmcgYW5kIHNob3dpbmcgc3VibWVudXMgKGNsaWNrLCBmb2N1cywgaG92ZXIpXG5cdFx0Ki9cblxuXHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgaXRlbXMgd2l0aCBzdWIgbWVudXMgYW5kIGJpbmQgZm9jdXMgdG8gdGhlbSBmb3IgdGFiYmluZ1xuXHRcdGZvciAoIGkgPSAwOyBpIDwgbWVudV9pdGVtc193aXRoX2NoaWxkcmVuX2NvdW50OyBpID0gaSArIDEgKSB7XG5cblx0XHRcdC8vIExldCBhIHNjcmVlbiByZWFkZXIga25vdyB0aGlzIG1lbnUgaGFzIGEgc3VibWVudSBieSBob29raW5nIGludG8gdGhlIGZpcnN0IGxpbmtcblx0XHRcdG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbltpXS5xdWVyeVNlbGVjdG9yKCAnYScgKS5zZXRBdHRyaWJ1dGUoICdhcmlhLWhhc3BvcHVwJywgJ3RydWUnICk7XG5cblx0XHRcdC8vIEhpZGUgYW5kIGxhYmVsIGVhY2ggc3ViIG1lbnVcblx0XHRcdG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbltpXS5xdWVyeVNlbGVjdG9yKCAnLnN1Yi1tZW51JyApLnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG5cdFx0XHRtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5baV0ucXVlcnlTZWxlY3RvciggJy5zdWItbWVudScgKS5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgJ1N1Ym1lbnUnICk7XG5cblx0XHRcdC8vIElmIHRoZSBzY3JlZW4gaXMgc21hbGwgb3IgdGhlIGFjdGlvbiBpcyBzZXQgdG8gY2xpY2tcblx0XHRcdGlmICggZ2V0X3NjcmVlbl9zaXplKCAnaGFzLW9mZnNjcmVlbi1uYXYnICkgfHwgc3ViX21lbnVfYWNpb24gPT09ICdjbGljaycgKSB7XG5cdFx0XHRcdG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbltpXS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBsaXN0ZW5lcl9zdWJtZW51X2NsaWNrICk7XG5cblx0XHRcdFx0dmFyIHN2Z0VsZW1lbnRzID0gbWVudV9pdGVtc193aXRoX2NoaWxkcmVuW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoICdzdmcnICk7XG5cblx0XHRcdFx0Zm9yICggdmFyIHogPSAwOyB6IDwgc3ZnRWxlbWVudHMubGVuZ3RoOyB6ID0geiArIDEgKSB7XG5cblx0XHRcdFx0XHRzdmdFbGVtZW50c1t6XS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBsaXN0ZW5lcl9zdWJtZW51X2NsaWNrICk7XG5cdFx0XHRcdFx0c3ZnRWxlbWVudHNbel0uYWRkRXZlbnRMaXN0ZW5lciggJ2tleXByZXNzJywgKCBlICkgPT4geyBbJ1NwYWNlJywgJ0VudGVyJ10uaW5jbHVkZXMoIGUuY29kZSApICYmIGxpc3RlbmVyX3N1Ym1lbnVfY2xpY2soIGUgKSB9ICk7XG5cdFx0XHRcdFx0c3ZnRWxlbWVudHNbel0uc2V0QXR0cmlidXRlKCAndGFiaW5kZXgnLCAnMCcgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVudS5jbGFzc0xpc3QuYWRkKCBzdWJfbWVudV9hY2lvbiA9PT0gJ2NsaWNrJyA/ICd1c2VzLWNsaWNrJyA6ICd1c2VzLWhvdmVyJyApO1xuXHRcdFx0fSBlbHNlIGlmICggc3ViX21lbnVfYWNpb24gIT09ICdjbGljaycgKSB7XG5cdFx0XHRcdGlmICggZ2V0X3NjcmVlbl9zaXplKCAnaGFzLWZ1bGwtbmF2JyApICkge1xuXHRcdFx0XHRcdG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbltpXS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VvdmVyJywgbGlzdGVuZXJfc3VibWVudV9mb2N1cyApO1xuXHRcdFx0XHRcdG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbltpXS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHZhciBvcGVuX21lbnVzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCAnLnN1Ym1lbnUtaXMtb3BlbicgKTtcblx0XHRcdFx0XHRcdHZhciBvcGVuX21lbnVzX2NvdW50ID0gb3Blbl9tZW51cy5sZW5ndGg7XG5cdFx0XHRcdFx0XHR2YXIgb3BuO1xuXG5cdFx0XHRcdFx0XHQvLyBXZSB3ZXJlIGdldHRpbmcgc29tZSBlcnJvcnMsIHNvIGxldCdzIGFkZCBpbiBhIGNoZWNrcG9pbnRcblx0XHRcdFx0XHRcdGlmICggb3Blbl9tZW51c19jb3VudCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBvcGVuIG1lbnVzIGFuZCBjbG9zZSB0aGVtXG5cdFx0XHRcdFx0XHRcdGZvciAoIG9wbiA9IDA7IG9wbiA8IG9wZW5fbWVudXNfY291bnQ7IG9wbiA9IG9wbiArIDEgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRtZW51X3N1Yl9jbG9zZSggb3Blbl9tZW51c1tvcG5dICk7XG5cblx0XHRcdFx0XHRcdFx0fSAvLyBmb3JcblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5baV0uYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3VzaW4nLCBsaXN0ZW5lcl9zdWJtZW51X2ZvY3VzICk7XG5cdFx0XHRcdFx0bWVudV9pdGVtc193aXRoX2NoaWxkcmVuW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoICcuc3ViLW1lbnUnICkuZm9yRWFjaCggc3VibWVudSA9PiB7XG5cdFx0XHRcdFx0XHRzdWJtZW51LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW92ZXInLCBldmVudCA9PiB7XG5cdFx0XHRcdFx0XHRcdHN1Ym1lbnUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnY2hpbGQtaGFzLWZvY3VzJyApO1xuXHRcdFx0XHRcdFx0XHRzdWJtZW51LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCggJ3N1Ym1lbnUtaXMtb3BlbicgKTtcblx0XHRcdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9IC8vIGlmXG5cdFx0XHR9IC8vIGlmXG5cdFx0fSAvLyBmb3JcblxuXHRcdC8vIEV4ZWN1dGUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdFx0aWYgKCB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRjYWxsYmFjay5jYWxsKCk7XG5cdFx0fVxuXHR9OyAvLyBidWlsZF9tZW51KClcblxuXHQvKlxuXHRcdEhlbHBlciBmdW5jdGlvbnNcblx0Ki9cblxuXHQvLyBHZXQgc2NyZWVuIHNpemUgZnJvbSBnZXRDb21wdXRlZFN0eWxlIChzbyB3ZSBkb24ndCBoYXZlIHRvIGRlZmluZSBlYWNoIGJyZWFrcG9pbnQgdHdpY2UpIC0tIFZhbHVlcyBhcmUgc2V0IGluIENTUyAtLVxuXHRmdW5jdGlvbiBnZXRfc2NyZWVuX3NpemUoIHNpemVTdHJpbmcgKSB7XG5cdFx0dmFyIHNpemUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZG9jdW1lbnQuYm9keSwnOmJlZm9yZScgKS5nZXRQcm9wZXJ0eVZhbHVlKCAnY29udGVudCcgKTtcblxuXHRcdGlmICggc2l6ZSAmJiBzaXplLmluZGV4T2YoIHNpemVTdHJpbmcgKSAhPT0gLTEgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG5cbn0gKSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlsaXR5L2RlYm91bmNlJztcbmltcG9ydCBwcmltYXJ5TWVudSBmcm9tICcuL2NvbXBvbmVudHMvcHJpbWFyeS1tZW51LmpzJztcbmltcG9ydCBzZWFyY2hUb2dnbGUgZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC10b2dnbGUuanMnO1xuaW1wb3J0IHdvb01lbnVDYXJ0IGZyb20gJy4vY29tcG9uZW50cy93b28tbWVudS1jYXJ0LmpzJztcblxucHJpbWFyeU1lbnUoKTtcbnNlYXJjaFRvZ2dsZSgpO1xud29vTWVudUNhcnQoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcblx0Y29uc3QgaGFzU2VsZWN0aXZlUmVmcmVzaCA9IChcblx0XHQndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHdwICYmXG5cdFx0d3AuY3VzdG9taXplICYmXG5cdFx0d3AuY3VzdG9taXplLnNlbGVjdGl2ZVJlZnJlc2ggJiZcblx0XHR3cC5jdXN0b21pemUubmF2TWVudXNQcmV2aWV3Lk5hdk1lbnVJbnN0YW5jZVBhcnRpYWxcblx0KTtcblxuXHQvLyBwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWQgbWlnaHQgcmVuZGVyIG11bHRpcGxlIHRpbWVzIGZvciBzb21lIHJlYXNvbiwgbGV0J3MgbWFrZSBzdXJlIHRvIGRlYm91Y2UgdGhpcy5cblx0Y29uc3QgaW5pdCA9IGRlYm91bmNlKCAoKSA9PiB7XG5cdFx0Ly8gd2UgbmVlZCB0byByZW1vdmUgdGhpcyBiZWZvcmUgY2FsbGluZyBwcmltYXJ5IG1lbnUgYWdhaW4uXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnaGFzLW9mZnNjcmVlbi1uYXYnICk7XG5cblx0XHRwcmltYXJ5TWVudSgpO1xuXHRcdHNlYXJjaFRvZ2dsZSgpO1xuXHR9LCAxMDAwICk7XG5cblx0aWYgKCBoYXNTZWxlY3RpdmVSZWZyZXNoICkge1xuXHRcdHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoLmJpbmQoICdwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWQnLCBmdW5jdGlvbiggcGxhY2VtZW50ICkge1xuXHRcdFx0Y29uc3QgY2hhbmdlZEhlYWRlclZhcmlhdGlvbiA9IChcblx0XHRcdFx0cGxhY2VtZW50ICYmXG5cdFx0XHRcdCdudWxsJyAhPT0gcGxhY2VtZW50LmNvbnRhaW5lclsgMCBdLnBhcmVudE5vZGUgJiZcblx0XHRcdFx0J2hlYWRlcl92YXJpYXRpb24nID09PSBwbGFjZW1lbnQucGFydGlhbC5pZFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBjaGFuZ2VkSGVhZGVyVmFyaWF0aW9uICkge1xuXHRcdFx0XHRpbml0KCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59ICk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.dev/assets/admin/js/customize/controls/range-control.js":
/*!******************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/controls/range-control.js ***!
  \******************************************************************/
/***/ (() => {

(function ($, api) {
  api.bind('ready', function () {
    $('.range_control__reset').on('click', function () {
      const rangeContainer = $(this).parent();
      const rangeInput = rangeContainer.find('input[data-input-type="range"]');
      const controlValue = rangeContainer.find('.range_control__value');
      const defaultValue = rangeInput.data('default-value');
      rangeInput.val(defaultValue);
      controlValue.find('span').html(defaultValue);
      controlValue.find('input').val(defaultValue);
      const customizeSetting = controlValue.find('input').data('customize-setting-link');
      wp.customize.control(customizeSetting).setting.set(defaultValue);
    });
  });
})(jQuery, wp.customize);

/***/ }),

/***/ "./.dev/assets/admin/js/customize/controls/set-active-color-schemes.js":
/*!*****************************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/controls/set-active-color-schemes.js ***!
  \*****************************************************************************/
/***/ (() => {

/* eslint-disable-next-line no-unused-vars */
(function ($) {
  jQuery.wp.wpColorPicker.prototype.options.palettes = goCustomizerControls.activeColorScheme;
  wp.customize('color_scheme', value => {
    value.bind(to => {
      // 0: design style (eg: modern)
      // 1: color scheme (eg: one, two, three, four etc.)
      const colorSchemeData = to.split('-');

      if (colorSchemeData.legnth < 2 || !goCustomizerControls.availableDesignStyles.hasOwnProperty(colorSchemeData[0]) || !goCustomizerControls.availableDesignStyles[colorSchemeData[0]].color_schemes.hasOwnProperty(colorSchemeData[1])) {
        return;
      }

      const colorScheme = goCustomizerControls.availableDesignStyles[colorSchemeData[0]].color_schemes[colorSchemeData[1]];

      if (colorScheme.hasOwnProperty('label')) {
        delete colorScheme.label;
      }

      jQuery.wp.wpColorPicker.prototype.options.palettes = Object.values(colorScheme);
    });
  });
})(jQuery);

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************************!*\
  !*** ./.dev/assets/admin/js/customize-controls.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customize_controls_range_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize/controls/range-control */ "./.dev/assets/admin/js/customize/controls/range-control.js");
/* harmony import */ var _customize_controls_range_control__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_customize_controls_range_control__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _customize_controls_set_active_color_schemes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customize/controls/set-active-color-schemes */ "./.dev/assets/admin/js/customize/controls/set-active-color-schemes.js");
/* harmony import */ var _customize_controls_set_active_color_schemes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_customize_controls_set_active_color_schemes__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Scripts within the customizer controls window.
 *
 * Contextually shows the color hue control and informs the preview
 * when users open or close the front page sections section.
 */

(function () {
  wp.customize.bind('ready', function () {
    /**
     * Function to hide/show Customizer options, based on another control.
     *
     * Parent option, Affected Control, Value which affects the control.
     *
     * @param {string} parentSetting   The setting that will toggle the display of the control.
     * @param {string} affectedControl The control that will be toggled.
     * @param {Array}  values          The values the parentSetting must have for the affectedControl to be displayed.
     * @param {number} speed           The speed of the toggle animation.
     */
    function customizerOptionDisplay(parentSetting, affectedControl, values) {
      let speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
      wp.customize(parentSetting, function (setting) {
        wp.customize.control(affectedControl, function (control) {
          /**
           * Toggle the visibility of a control.
           */
          const visibility = function () {
            if (values.includes(setting.get())) {
              control.container.slideDown(speed);
            } else {
              control.container.slideUp(speed);
            }
          };

          visibility();
          setting.bind(visibility);
        });
      });
    }
    /**
     * Function to hide/show Customizer options, based on another control.
     *
     * Parent option, Affected Control, Value which affects the control.
     *
     * @param {string} parentSetting   The setting that will toggle the display of the control.
     * @param {string} affectedControl The control that will be toggled.
     * @param {number} speed           The speed of the toggle animation.
     */


    function customizerImageOptionDisplay(parentSetting, affectedControl) {
      let speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      wp.customize(parentSetting, function (setting) {
        wp.customize.control(affectedControl, function (control) {
          /**
           * Toggle the visibility of a control.
           */
          const visibility = function () {
            if (setting.get() && 'none' !== setting.get() && '0' !== setting.get()) {
              control.container.slideDown(speed);
            } else {
              control.container.slideUp(speed);
            }
          };

          visibility();
          setting.bind(visibility);
        });
      });
    } // Only show the Footer Header Color selector, if the footer variation is 2 or 4.


    customizerOptionDisplay('footer_variation', 'footer_heading_color', ['footer-3', 'footer-4']);
    customizerOptionDisplay('footer_variation', 'footer_heading_color_alt', ['footer-3', 'footer-4']); // Footer nav locations #2 and #3 are only available on Footer Variation #3 and #4.

    customizerOptionDisplay('footer_variation', 'nav_menu_locations[footer-2]', ['footer-3', 'footer-4']);
    customizerOptionDisplay('footer_variation', 'nav_menu_locations[footer-3]', ['footer-3', 'footer-4']); // Only show the following options, if a logo is uploaded.

    customizerImageOptionDisplay('custom_logo', 'logo_width');
    customizerImageOptionDisplay('custom_logo', 'logo_width_mobile');
  });
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYWRtaW4vY3VzdG9taXplLWNvbnRyb2xzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFHQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ28vLi8uZGV2L2Fzc2V0cy9hZG1pbi9qcy9jdXN0b21pemUvY29udHJvbHMvcmFuZ2UtY29udHJvbC5qcyIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS9jb250cm9scy9zZXQtYWN0aXZlLWNvbG9yLXNjaGVtZXMuanMiLCJ3ZWJwYWNrOi8vZ28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ28vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ28vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS1jb250cm9scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoIGZ1bmN0aW9uKCAkLCBhcGkgKSB7XG5cdGFwaS5iaW5kKCAncmVhZHknLCBmdW5jdGlvbigpIHtcblx0XHQkKCAnLnJhbmdlX2NvbnRyb2xfX3Jlc2V0JyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0IHJhbmdlQ29udGFpbmVyID0gJCggdGhpcyApLnBhcmVudCgpO1xuXG5cdFx0XHRjb25zdCByYW5nZUlucHV0ID0gcmFuZ2VDb250YWluZXIuZmluZCggJ2lucHV0W2RhdGEtaW5wdXQtdHlwZT1cInJhbmdlXCJdJyApO1xuXHRcdFx0Y29uc3QgY29udHJvbFZhbHVlID0gcmFuZ2VDb250YWluZXIuZmluZCggJy5yYW5nZV9jb250cm9sX192YWx1ZScgKTtcblxuXHRcdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gcmFuZ2VJbnB1dC5kYXRhKCAnZGVmYXVsdC12YWx1ZScgKTtcblxuXHRcdFx0cmFuZ2VJbnB1dC52YWwoIGRlZmF1bHRWYWx1ZSApO1xuXHRcdFx0Y29udHJvbFZhbHVlLmZpbmQoICdzcGFuJyApLmh0bWwoIGRlZmF1bHRWYWx1ZSApO1xuXHRcdFx0Y29udHJvbFZhbHVlLmZpbmQoICdpbnB1dCcgKS52YWwoIGRlZmF1bHRWYWx1ZSApO1xuXG5cdFx0XHRjb25zdCBjdXN0b21pemVTZXR0aW5nID0gY29udHJvbFZhbHVlLmZpbmQoICdpbnB1dCcgKS5kYXRhKCAnY3VzdG9taXplLXNldHRpbmctbGluaycgKTtcblx0XHRcdHdwLmN1c3RvbWl6ZS5jb250cm9sKCBjdXN0b21pemVTZXR0aW5nICkuc2V0dGluZy5zZXQoIGRlZmF1bHRWYWx1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xufSggalF1ZXJ5LCB3cC5jdXN0b21pemUgKSApO1xuIiwiLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzICovXG4oIGZ1bmN0aW9uKCAkICkge1xuXHRqUXVlcnkud3Aud3BDb2xvclBpY2tlci5wcm90b3R5cGUub3B0aW9ucy5wYWxldHRlcyA9IGdvQ3VzdG9taXplckNvbnRyb2xzLmFjdGl2ZUNvbG9yU2NoZW1lO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2NvbG9yX3NjaGVtZScsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdC8vIDA6IGRlc2lnbiBzdHlsZSAoZWc6IG1vZGVybilcblx0XHRcdC8vIDE6IGNvbG9yIHNjaGVtZSAoZWc6IG9uZSwgdHdvLCB0aHJlZSwgZm91ciBldGMuKVxuXHRcdFx0Y29uc3QgY29sb3JTY2hlbWVEYXRhID0gdG8uc3BsaXQoICctJyApO1xuXHRcdFx0aWYgKCBjb2xvclNjaGVtZURhdGEubGVnbnRoIDwgMiB8fCAhIGdvQ3VzdG9taXplckNvbnRyb2xzLmF2YWlsYWJsZURlc2lnblN0eWxlcy5oYXNPd25Qcm9wZXJ0eSggY29sb3JTY2hlbWVEYXRhWyAwIF0gKSB8fCAhIGdvQ3VzdG9taXplckNvbnRyb2xzLmF2YWlsYWJsZURlc2lnblN0eWxlc1sgY29sb3JTY2hlbWVEYXRhWyAwIF0gXS5jb2xvcl9zY2hlbWVzLmhhc093blByb3BlcnR5KCBjb2xvclNjaGVtZURhdGFbIDEgXSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb2xvclNjaGVtZSA9IGdvQ3VzdG9taXplckNvbnRyb2xzLmF2YWlsYWJsZURlc2lnblN0eWxlc1sgY29sb3JTY2hlbWVEYXRhWyAwIF0gXS5jb2xvcl9zY2hlbWVzWyBjb2xvclNjaGVtZURhdGFbIDEgXSBdO1xuXHRcdFx0aWYgKCBjb2xvclNjaGVtZS5oYXNPd25Qcm9wZXJ0eSggJ2xhYmVsJyApICkge1xuXHRcdFx0XHRkZWxldGUgKCBjb2xvclNjaGVtZS5sYWJlbCApO1xuXHRcdFx0fVxuXHRcdFx0alF1ZXJ5LndwLndwQ29sb3JQaWNrZXIucHJvdG90eXBlLm9wdGlvbnMucGFsZXR0ZXMgPSBPYmplY3QudmFsdWVzKCBjb2xvclNjaGVtZSApO1xuXHRcdH0gKTtcblx0fSApO1xufSggalF1ZXJ5ICkgKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY3VzdG9taXplL2NvbnRyb2xzL3JhbmdlLWNvbnRyb2wnO1xuaW1wb3J0ICcuL2N1c3RvbWl6ZS9jb250cm9scy9zZXQtYWN0aXZlLWNvbG9yLXNjaGVtZXMnO1xuXG4vKipcbiAqIFNjcmlwdHMgd2l0aGluIHRoZSBjdXN0b21pemVyIGNvbnRyb2xzIHdpbmRvdy5cbiAqXG4gKiBDb250ZXh0dWFsbHkgc2hvd3MgdGhlIGNvbG9yIGh1ZSBjb250cm9sIGFuZCBpbmZvcm1zIHRoZSBwcmV2aWV3XG4gKiB3aGVuIHVzZXJzIG9wZW4gb3IgY2xvc2UgdGhlIGZyb250IHBhZ2Ugc2VjdGlvbnMgc2VjdGlvbi5cbiAqL1xuXG4oIGZ1bmN0aW9uKCkge1xuXHR3cC5jdXN0b21pemUuYmluZCggJ3JlYWR5JywgZnVuY3Rpb24oKSB7XG5cdFx0LyoqXG5cdFx0ICogRnVuY3Rpb24gdG8gaGlkZS9zaG93IEN1c3RvbWl6ZXIgb3B0aW9ucywgYmFzZWQgb24gYW5vdGhlciBjb250cm9sLlxuXHRcdCAqXG5cdFx0ICogUGFyZW50IG9wdGlvbiwgQWZmZWN0ZWQgQ29udHJvbCwgVmFsdWUgd2hpY2ggYWZmZWN0cyB0aGUgY29udHJvbC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRTZXR0aW5nICAgVGhlIHNldHRpbmcgdGhhdCB3aWxsIHRvZ2dsZSB0aGUgZGlzcGxheSBvZiB0aGUgY29udHJvbC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWZmZWN0ZWRDb250cm9sIFRoZSBjb250cm9sIHRoYXQgd2lsbCBiZSB0b2dnbGVkLlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9ICB2YWx1ZXMgICAgICAgICAgVGhlIHZhbHVlcyB0aGUgcGFyZW50U2V0dGluZyBtdXN0IGhhdmUgZm9yIHRoZSBhZmZlY3RlZENvbnRyb2wgdG8gYmUgZGlzcGxheWVkLlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZCAgICAgICAgICAgVGhlIHNwZWVkIG9mIHRoZSB0b2dnbGUgYW5pbWF0aW9uLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGN1c3RvbWl6ZXJPcHRpb25EaXNwbGF5KCBwYXJlbnRTZXR0aW5nLCBhZmZlY3RlZENvbnRyb2wsIHZhbHVlcywgc3BlZWQgPSAxMDAgKSB7XG5cdFx0XHR3cC5jdXN0b21pemUoIHBhcmVudFNldHRpbmcsIGZ1bmN0aW9uKCBzZXR0aW5nICkge1xuXHRcdFx0XHR3cC5jdXN0b21pemUuY29udHJvbCggYWZmZWN0ZWRDb250cm9sLCBmdW5jdGlvbiggY29udHJvbCApIHtcblx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHQgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgYSBjb250cm9sLlxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdGNvbnN0IHZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICggdmFsdWVzLmluY2x1ZGVzKCBzZXR0aW5nLmdldCgpICkgKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2wuY29udGFpbmVyLnNsaWRlRG93biggc3BlZWQgKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2wuY29udGFpbmVyLnNsaWRlVXAoIHNwZWVkICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdHZpc2liaWxpdHkoKTtcblx0XHRcdFx0XHRzZXR0aW5nLmJpbmQoIHZpc2liaWxpdHkgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEZ1bmN0aW9uIHRvIGhpZGUvc2hvdyBDdXN0b21pemVyIG9wdGlvbnMsIGJhc2VkIG9uIGFub3RoZXIgY29udHJvbC5cblx0XHQgKlxuXHRcdCAqIFBhcmVudCBvcHRpb24sIEFmZmVjdGVkIENvbnRyb2wsIFZhbHVlIHdoaWNoIGFmZmVjdHMgdGhlIGNvbnRyb2wuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50U2V0dGluZyAgIFRoZSBzZXR0aW5nIHRoYXQgd2lsbCB0b2dnbGUgdGhlIGRpc3BsYXkgb2YgdGhlIGNvbnRyb2wuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFmZmVjdGVkQ29udHJvbCBUaGUgY29udHJvbCB0aGF0IHdpbGwgYmUgdG9nZ2xlZC5cblx0XHQgKiBAcGFyYW0ge251bWJlcn0gc3BlZWQgICAgICAgICAgIFRoZSBzcGVlZCBvZiB0aGUgdG9nZ2xlIGFuaW1hdGlvbi5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBjdXN0b21pemVySW1hZ2VPcHRpb25EaXNwbGF5KCBwYXJlbnRTZXR0aW5nLCBhZmZlY3RlZENvbnRyb2wsIHNwZWVkID0gMTAwICkge1xuXHRcdFx0d3AuY3VzdG9taXplKCBwYXJlbnRTZXR0aW5nLCBmdW5jdGlvbiggc2V0dGluZyApIHtcblx0XHRcdFx0d3AuY3VzdG9taXplLmNvbnRyb2woIGFmZmVjdGVkQ29udHJvbCwgZnVuY3Rpb24oIGNvbnRyb2wgKSB7XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIGEgY29udHJvbC5cblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRjb25zdCB2aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHNldHRpbmcuZ2V0KCkgJiYgJ25vbmUnICE9PSBzZXR0aW5nLmdldCgpICYmICcwJyAhPT0gc2V0dGluZy5nZXQoKSApIHtcblx0XHRcdFx0XHRcdFx0Y29udHJvbC5jb250YWluZXIuc2xpZGVEb3duKCBzcGVlZCApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29udHJvbC5jb250YWluZXIuc2xpZGVVcCggc3BlZWQgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0dmlzaWJpbGl0eSgpO1xuXHRcdFx0XHRcdHNldHRpbmcuYmluZCggdmlzaWJpbGl0eSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Ly8gT25seSBzaG93IHRoZSBGb290ZXIgSGVhZGVyIENvbG9yIHNlbGVjdG9yLCBpZiB0aGUgZm9vdGVyIHZhcmlhdGlvbiBpcyAyIG9yIDQuXG5cdFx0Y3VzdG9taXplck9wdGlvbkRpc3BsYXkoICdmb290ZXJfdmFyaWF0aW9uJywgJ2Zvb3Rlcl9oZWFkaW5nX2NvbG9yJywgWyAnZm9vdGVyLTMnLCAnZm9vdGVyLTQnIF0gKTtcblx0XHRjdXN0b21pemVyT3B0aW9uRGlzcGxheSggJ2Zvb3Rlcl92YXJpYXRpb24nLCAnZm9vdGVyX2hlYWRpbmdfY29sb3JfYWx0JywgWyAnZm9vdGVyLTMnLCAnZm9vdGVyLTQnIF0gKTtcblxuXHRcdC8vIEZvb3RlciBuYXYgbG9jYXRpb25zICMyIGFuZCAjMyBhcmUgb25seSBhdmFpbGFibGUgb24gRm9vdGVyIFZhcmlhdGlvbiAjMyBhbmQgIzQuXG5cdFx0Y3VzdG9taXplck9wdGlvbkRpc3BsYXkoICdmb290ZXJfdmFyaWF0aW9uJywgJ25hdl9tZW51X2xvY2F0aW9uc1tmb290ZXItMl0nLCBbICdmb290ZXItMycsICdmb290ZXItNCcgXSApO1xuXHRcdGN1c3RvbWl6ZXJPcHRpb25EaXNwbGF5KCAnZm9vdGVyX3ZhcmlhdGlvbicsICduYXZfbWVudV9sb2NhdGlvbnNbZm9vdGVyLTNdJywgWyAnZm9vdGVyLTMnLCAnZm9vdGVyLTQnIF0gKTtcblxuXHRcdC8vIE9ubHkgc2hvdyB0aGUgZm9sbG93aW5nIG9wdGlvbnMsIGlmIGEgbG9nbyBpcyB1cGxvYWRlZC5cblx0XHRjdXN0b21pemVySW1hZ2VPcHRpb25EaXNwbGF5KCAnY3VzdG9tX2xvZ28nLCAnbG9nb193aWR0aCcgKTtcblx0XHRjdXN0b21pemVySW1hZ2VPcHRpb25EaXNwbGF5KCAnY3VzdG9tX2xvZ28nLCAnbG9nb193aWR0aF9tb2JpbGUnICk7XG5cdH0gKTtcbn0oIGpRdWVyeSApICk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
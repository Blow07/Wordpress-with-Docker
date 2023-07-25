/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.dev/assets/admin/js/customize/preview/color-schemes.js":
/*!*****************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/color-schemes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./.dev/assets/admin/js/customize/util.js");

const $ = jQuery;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  let selectedDesignStyle = GoPreviewData.selectedDesignStyle;
  /**
   * Set color
   *
   * @param {*} color
   * @param {*} cssVar
   */

  const setColor = (color, cssVar) => {
    const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(color);
    document.querySelector(':root').style.setProperty(`${cssVar}`, `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`);
  };
  /**
   * Load the color schemes for the selected design style.
   *
   * @param {*} colorScheme
   */


  const loadColorSchemes = colorScheme => {
    const designStyle = getDesignStyle(selectedDesignStyle);
    colorScheme = colorScheme.replace(`${selectedDesignStyle}-`, '');

    if ('undefined' !== typeof designStyle.color_schemes[colorScheme] && 'undefined' !== typeof wp.customize.settings.controls) {
      const colors = designStyle.color_schemes[colorScheme];
      toggleColorSchemes();
      setTimeout(function () {
        updateViewportBasis(designStyle);
      }, 200);
      Object.entries(wp.customize.settings.controls) // eslint-disable-next-line no-unused-vars
      .filter(_ref => {
        let [_control, config] = _ref;
        return config.type === 'color';
      }).forEach(_ref2 => {
        let [customizerControl, config] = _ref2;
        const customizerSetting = wp.customize(config.settings.default);
        const color = colors[config.settings.default.replace('_color', '')] || '';
        customizerSetting.set(color);
        wp.customize.control(customizerControl).container.find('.color-picker-hex').data('data-default-color', color).wpColorPicker('defaultColor', color).trigger('change');
      });
    }
  };
  /**
   * Control the visibility of the color schemes selections.
   */


  const toggleColorSchemes = () => {
    $('label[for^=color_scheme_control]').hide();
    $(`label[for^=color_scheme_control-${selectedDesignStyle}-]`).show();
  };
  /**
   * Update the viewport basis for the selected design style.
   *
   * @param {*} designStyle
   */


  const updateViewportBasis = designStyle => {
    const viewportBasis = 'undefined' !== typeof designStyle.viewport_basis ? designStyle.viewport_basis : '950';
    wp.customize.control('viewport_basis').setting(viewportBasis);
  };
  /**
   * Returns the design style array
   *
   * @param {*} designStyle
   */


  const getDesignStyle = designStyle => {
    if ('undefined' !== typeof GoPreviewData.design_styles && 'undefined' !== GoPreviewData.design_styles[designStyle]) {
      return GoPreviewData.design_styles[designStyle];
    }

    return false;
  };

  wp.customize.bind('ready', () => toggleColorSchemes());
  wp.customize('design_style', value => {
    selectedDesignStyle = value.get();
    value.bind(to => {
      selectedDesignStyle = to;
      loadColorSchemes('one');
      $(`#color_scheme_control-${selectedDesignStyle}-one`).prop('checked', true);
    });
  });
  wp.customize('color_scheme', value => {
    value.bind(colorScheme => loadColorSchemes(colorScheme));
  });
  wp.customize('background_color', value => {
    value.bind(to => setColor(to, '--go--color--background'));
  });
  wp.customize('primary_color', value => {
    value.bind(to => setColor(to, '--go--color--primary'));
  });
  wp.customize('secondary_color', value => {
    value.bind(to => setColor(to, '--go--color--secondary'));
  });
  wp.customize('tertiary_color', value => {
    value.bind(to => setColor(to, '--go--color--tertiary'));
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/design-style.js":
/*!****************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/design-style.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = jQuery;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  wp.customize('design_style', value => {
    value.bind(to => {
      $('#customize-preview').addClass('is-loading');

      if ('undefined' !== typeof GoPreviewData.design_styles && 'undefined' !== GoPreviewData.design_styles[to]) {
        setTimeout(function () {
          const designStyle = GoPreviewData.design_styles[to];
          $('link[id*="design-style"]').attr('href', designStyle.url);
          setTimeout(function () {
            $('#customize-preview').removeClass('is-loading');
          }, 500);
        }, 500); // match the .02s transition time from core
      }
    });
  });
  /**
   * Set viewport basis
   *
   * @param {*} size
   */

  const setViewportBasis = size => {
    document.documentElement.style.setProperty('--go--viewport-basis', size ? size : '1000');
  };

  wp.customize('viewport_basis', value => {
    value.bind(to => setViewportBasis(to));
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/footer.js":
/*!**********************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/footer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./.dev/assets/admin/js/customize/util.js");

const $ = jQuery;
$(document).ready(setMenuLocationDescription);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  wp.customize('footer_variation', value => {
    value.bind(to => {
      $('body').removeClass('has-footer-1 has-footer-2 has-footer-3 has-footer-4').addClass('has-' + to);
      setMenuLocationDescription();
    });
  });
  wp.customize('copyright', function (value) {
    value.bind(function (to) {
      $('.copyright').html(to);
    });
  });
  wp.customize('footer_background_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : undefined;
      document.querySelector(':root').style.setProperty('--go-footer--color--background', setTo); // Add class if a background color is applied.

      if (to) {
        $('body').addClass('has-footer-background');
        $('.site-footer').addClass('has-background');
      } else {
        $('body').removeClass('has-footer-background');
        $('.site-footer').removeClass('has-background');
      }
    });
  });
  wp.customize('social_icon_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : undefined;
      document.querySelector(':root').style.setProperty('--go-social--color--text', setTo);
    });
  });
  wp.customize('footer_text_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : undefined;
      document.querySelector(':root').style.setProperty('--go-footer--color--text', setTo);
      document.querySelector(':root').style.setProperty('--go-footer-navigation--color--text', setTo);
    });
  });
  wp.customize('footer_heading_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : null;
      document.querySelector(':root').style.setProperty('--go-footer-heading--color--text', setTo);
    });
  });

  for (let i = 0; i < GoPreviewData.socialIcons.length; i++) {
    wp.customize(`social_icon_${GoPreviewData.socialIcons[i]}`, value => {
      value.bind(to => {
        if (to) {
          $(`.social-icon-${GoPreviewData.socialIcons[i]}`).removeClass('display-none');
        } else {
          $(`.social-icon-${GoPreviewData.socialIcons[i]}`).addClass('display-none');
        }
      });
    });
  }
});

function setMenuLocationDescription() {
  const menuLocationsDescription = $('.customize-section-title-menu_locations-description').text();
  const menuLocationCount = ['footer-1', 'footer-2'].includes(wp.customize('footer_variation').get()) ? '2' : '4';
  $('.customize-section-title-menu_locations-description').text(menuLocationsDescription.replace(/[0-9]/g, menuLocationCount));
}

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/header.js":
/*!**********************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/header.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./.dev/assets/admin/js/customize/util.js");

const $ = jQuery;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  wp.customize('header_variation', value => {
    value.bind(to => {
      $('body').removeClass('has-header-1 has-header-2 has-header-3 has-header-4 has-header-5 has-header-6 has-header-7').addClass('has-' + to);
    });
  });
  wp.customize('header_background_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : undefined;
      document.querySelector(':root').style.setProperty('--go-header--color--background', setTo); // Add class if a background color is applied.

      if (to) {
        $('.header').addClass('has-background');
      } else {
        $('.header').removeClass('has-background');
      }
    });
  });
  wp.customize('header_text_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : undefined;
      document.querySelector(':root').style.setProperty('--go-navigation--color--text', setTo);
      document.querySelector(':root').style.setProperty('--go-site-description--color--text', setTo);
      document.querySelector(':root').style.setProperty('--go-search-button--color--text', setTo);
      document.querySelector(':root').style.setProperty('--go-site-title--color--text', setTo);
    });
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/logo-sizing.js":
/*!***************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/logo-sizing.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  /**
   * Set Logo width.
   *
   * @param {*} width
   */
  const setLogoWidth = width => {
    document.documentElement.style.setProperty('--go-logo--max-width', width ? `${width}px` : 'none');
  };
  /**
   * Set Logo mobile width.
   *
   * @param {*} width
   */


  const setLogoMobileWidth = width => {
    document.documentElement.style.setProperty('--go-logo-mobile--max-width', width ? `${width}px` : 'none');
  };

  wp.customize('logo_width', value => {
    value.bind(to => setLogoWidth(to));
  });
  wp.customize('logo_width_mobile', value => {
    value.bind(to => setLogoMobileWidth(to));
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/page-titles.js":
/*!***************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/page-titles.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = jQuery; // eslint-disable-line

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  wp.customize('page_titles', value => {
    const selectors = '#content > .entry-header, body.page article .entry-header, body.woocommerce .entry-header';
    value.bind(to => {
      if (to) {
        $('body').addClass('has-page-titles');
        $(selectors).removeClass('display-none');
      } else {
        $('body').removeClass('has-page-titles');
        $(selectors).addClass('display-none');
      }
    });
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/util.js":
/*!************************************************!*\
  !*** ./.dev/assets/admin/js/customize/util.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToHSL": () => (/* binding */ hexToHSL)
/* harmony export */ });
/**
 * Functions to convert hex color to HSL
 *
 * @param {*} H
 */
function hexToHSL(H) {
  // Convert hex to RGB first
  let b = 0;
  let g = 0;
  let r = 0;

  if (4 === H.length) {
    r = `0x${H[1]}${H[1]}`;
    g = `0x${H[2]}${H[2]}`;
    b = `0x${H[3]}${H[3]}`;
  } else if (7 === H.length) {
    r = `0x${H[1]}${H[2]}`;
    g = `0x${H[3]}${H[4]}`;
    b = `0x${H[5]}${H[6]}`;
  } // Then to HSL


  r /= 255;
  g /= 255;
  b /= 255;
  const cmax = Math.max(r, g, b);
  const cmin = Math.min(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (0 === delta) {
    h = 0;
  } else if (cmax === r) {
    h = (g - b) / delta % 6;
  } else if (cmax === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (0 > h) {
    h += 360;
  }

  l = (cmax + cmin) / 2;
  s = 0 === delta ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed();
  l = +(l * 100).toFixed();
  return [h, s, l];
}

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
/*!***************************************************!*\
  !*** ./.dev/assets/admin/js/customize-preview.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customize_preview_color_schemes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize/preview/color-schemes */ "./.dev/assets/admin/js/customize/preview/color-schemes.js");
/* harmony import */ var _customize_preview_design_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customize/preview/design-style */ "./.dev/assets/admin/js/customize/preview/design-style.js");
/* harmony import */ var _customize_preview_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customize/preview/footer */ "./.dev/assets/admin/js/customize/preview/footer.js");
/* harmony import */ var _customize_preview_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customize/preview/header */ "./.dev/assets/admin/js/customize/preview/header.js");
/* harmony import */ var _customize_preview_logo_sizing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customize/preview/logo-sizing */ "./.dev/assets/admin/js/customize/preview/logo-sizing.js");
/* harmony import */ var _customize_preview_page_titles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customize/preview/page-titles */ "./.dev/assets/admin/js/customize/preview/page-titles.js");






(0,_customize_preview_design_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_customize_preview_header__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_customize_preview_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_customize_preview_color_schemes__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_customize_preview_logo_sizing__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_customize_preview_page_titles__WEBPACK_IMPORTED_MODULE_5__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYWRtaW4vY3VzdG9taXplLXByZXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BIQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvLy4vLmRldi9hc3NldHMvYWRtaW4vanMvY3VzdG9taXplL3ByZXZpZXcvY29sb3Itc2NoZW1lcy5qcyIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS9wcmV2aWV3L2Rlc2lnbi1zdHlsZS5qcyIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS9wcmV2aWV3L2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS9wcmV2aWV3L2hlYWRlci5qcyIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS9wcmV2aWV3L2xvZ28tc2l6aW5nLmpzIiwid2VicGFjazovL2dvLy4vLmRldi9hc3NldHMvYWRtaW4vanMvY3VzdG9taXplL3ByZXZpZXcvcGFnZS10aXRsZXMuanMiLCJ3ZWJwYWNrOi8vZ28vLi8uZGV2L2Fzc2V0cy9hZG1pbi9qcy9jdXN0b21pemUvdXRpbC5qcyIsIndlYnBhY2s6Ly9nby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvLy4vLmRldi9hc3NldHMvYWRtaW4vanMvY3VzdG9taXplLXByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGV4VG9IU0wgfSBmcm9tICcuLi91dGlsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRsZXQgc2VsZWN0ZWREZXNpZ25TdHlsZSA9IEdvUHJldmlld0RhdGEuc2VsZWN0ZWREZXNpZ25TdHlsZTtcblxuXHQvKipcblx0ICogU2V0IGNvbG9yXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gY29sb3Jcblx0ICogQHBhcmFtIHsqfSBjc3NWYXJcblx0ICovXG5cdGNvbnN0IHNldENvbG9yID0gKCBjb2xvciwgY3NzVmFyICkgPT4ge1xuXHRcdGNvbnN0IGhzbCA9IGhleFRvSFNMKCBjb2xvciApO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6cm9vdCcgKS5zdHlsZS5zZXRQcm9wZXJ0eSggYCR7IGNzc1ZhciB9YCwgYGhzbCgkeyBoc2xbIDAgXSB9LCAkeyBoc2xbIDEgXSB9JSwgJHsgaHNsWyAyIF0gfSUpYCApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBMb2FkIHRoZSBjb2xvciBzY2hlbWVzIGZvciB0aGUgc2VsZWN0ZWQgZGVzaWduIHN0eWxlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGNvbG9yU2NoZW1lXG5cdCAqL1xuXHRjb25zdCBsb2FkQ29sb3JTY2hlbWVzID0gKCBjb2xvclNjaGVtZSApID0+IHtcblx0XHRjb25zdCBkZXNpZ25TdHlsZSA9IGdldERlc2lnblN0eWxlKCBzZWxlY3RlZERlc2lnblN0eWxlICk7XG5cdFx0Y29sb3JTY2hlbWUgPSBjb2xvclNjaGVtZS5yZXBsYWNlKCBgJHsgc2VsZWN0ZWREZXNpZ25TdHlsZSB9LWAsICcnICk7XG5cblx0XHRpZiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgZGVzaWduU3R5bGUuY29sb3Jfc2NoZW1lc1sgY29sb3JTY2hlbWUgXSAmJiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHdwLmN1c3RvbWl6ZS5zZXR0aW5ncy5jb250cm9scyApIHtcblx0XHRcdGNvbnN0IGNvbG9ycyA9IGRlc2lnblN0eWxlLmNvbG9yX3NjaGVtZXNbIGNvbG9yU2NoZW1lIF07XG5cdFx0XHR0b2dnbGVDb2xvclNjaGVtZXMoKTtcblxuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHVwZGF0ZVZpZXdwb3J0QmFzaXMoIGRlc2lnblN0eWxlICk7XG5cdFx0XHR9LCAyMDAgKTtcblxuXHRcdFx0T2JqZWN0LmVudHJpZXMoIHdwLmN1c3RvbWl6ZS5zZXR0aW5ncy5jb250cm9scyApXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRcdFx0XHQuZmlsdGVyKCAoIFsgX2NvbnRyb2wsIGNvbmZpZyBdICkgPT4gY29uZmlnLnR5cGUgPT09ICdjb2xvcicgKVxuXHRcdFx0XHQuZm9yRWFjaCggKCBbIGN1c3RvbWl6ZXJDb250cm9sLCBjb25maWcgXSApID0+IHtcblx0XHRcdFx0XHRjb25zdCBjdXN0b21pemVyU2V0dGluZyA9IHdwLmN1c3RvbWl6ZSggY29uZmlnLnNldHRpbmdzLmRlZmF1bHQgKTtcblx0XHRcdFx0XHRjb25zdCBjb2xvciA9IGNvbG9yc1sgY29uZmlnLnNldHRpbmdzLmRlZmF1bHQucmVwbGFjZSggJ19jb2xvcicsICcnICkgXSB8fCAnJztcblxuXHRcdFx0XHRcdGN1c3RvbWl6ZXJTZXR0aW5nLnNldCggY29sb3IgKTtcblxuXHRcdFx0XHRcdHdwLmN1c3RvbWl6ZS5jb250cm9sKCBjdXN0b21pemVyQ29udHJvbCApLmNvbnRhaW5lci5maW5kKCAnLmNvbG9yLXBpY2tlci1oZXgnIClcblx0XHRcdFx0XHRcdC5kYXRhKCAnZGF0YS1kZWZhdWx0LWNvbG9yJywgY29sb3IgKVxuXHRcdFx0XHRcdFx0LndwQ29sb3JQaWNrZXIoICdkZWZhdWx0Q29sb3InLCBjb2xvciApXG5cdFx0XHRcdFx0XHQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fSApO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQ29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY29sb3Igc2NoZW1lcyBzZWxlY3Rpb25zLlxuXHQgKi9cblx0Y29uc3QgdG9nZ2xlQ29sb3JTY2hlbWVzID0gKCkgPT4ge1xuXHRcdCQoICdsYWJlbFtmb3JePWNvbG9yX3NjaGVtZV9jb250cm9sXScgKS5oaWRlKCk7XG5cdFx0JCggYGxhYmVsW2Zvcl49Y29sb3Jfc2NoZW1lX2NvbnRyb2wtJHsgc2VsZWN0ZWREZXNpZ25TdHlsZSB9LV1gICkuc2hvdygpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIHZpZXdwb3J0IGJhc2lzIGZvciB0aGUgc2VsZWN0ZWQgZGVzaWduIHN0eWxlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGRlc2lnblN0eWxlXG5cdCAqL1xuXHRjb25zdCB1cGRhdGVWaWV3cG9ydEJhc2lzID0gKCBkZXNpZ25TdHlsZSApID0+IHtcblx0XHRjb25zdCB2aWV3cG9ydEJhc2lzID0gKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGRlc2lnblN0eWxlLnZpZXdwb3J0X2Jhc2lzICkgPyBkZXNpZ25TdHlsZS52aWV3cG9ydF9iYXNpcyA6ICc5NTAnO1xuXHRcdHdwLmN1c3RvbWl6ZS5jb250cm9sKCAndmlld3BvcnRfYmFzaXMnICkuc2V0dGluZyggdmlld3BvcnRCYXNpcyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBkZXNpZ24gc3R5bGUgYXJyYXlcblx0ICpcblx0ICogQHBhcmFtIHsqfSBkZXNpZ25TdHlsZVxuXHQgKi9cblx0Y29uc3QgZ2V0RGVzaWduU3R5bGUgPSAoIGRlc2lnblN0eWxlICkgPT4ge1xuXHRcdGlmIChcblx0XHRcdCd1bmRlZmluZWQnICE9PSB0eXBlb2YgR29QcmV2aWV3RGF0YS5kZXNpZ25fc3R5bGVzICYmXG5cdFx0XHQndW5kZWZpbmVkJyAhPT0gR29QcmV2aWV3RGF0YS5kZXNpZ25fc3R5bGVzWyBkZXNpZ25TdHlsZSBdXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gR29QcmV2aWV3RGF0YS5kZXNpZ25fc3R5bGVzWyBkZXNpZ25TdHlsZSBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHR3cC5jdXN0b21pemUuYmluZCggJ3JlYWR5JywgKCkgPT4gdG9nZ2xlQ29sb3JTY2hlbWVzKCkgKTtcblxuXHR3cC5jdXN0b21pemUoICdkZXNpZ25fc3R5bGUnLCAoIHZhbHVlICkgPT4ge1xuXHRcdHNlbGVjdGVkRGVzaWduU3R5bGUgPSB2YWx1ZS5nZXQoKTtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0c2VsZWN0ZWREZXNpZ25TdHlsZSA9IHRvO1xuXHRcdFx0bG9hZENvbG9yU2NoZW1lcyggJ29uZScgKTtcblx0XHRcdCQoIGAjY29sb3Jfc2NoZW1lX2NvbnRyb2wtJHsgc2VsZWN0ZWREZXNpZ25TdHlsZSB9LW9uZWAgKS5wcm9wKCAnY2hlY2tlZCcsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdjb2xvcl9zY2hlbWUnLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggY29sb3JTY2hlbWUgKSA9PiBsb2FkQ29sb3JTY2hlbWVzKCBjb2xvclNjaGVtZSApICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdiYWNrZ3JvdW5kX2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4gc2V0Q29sb3IoIHRvLCAnLS1nby0tY29sb3ItLWJhY2tncm91bmQnICkgKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ3ByaW1hcnlfY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiBzZXRDb2xvciggdG8sICctLWdvLS1jb2xvci0tcHJpbWFyeScgKSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnc2Vjb25kYXJ5X2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4gc2V0Q29sb3IoIHRvLCAnLS1nby0tY29sb3ItLXNlY29uZGFyeScgKSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAndGVydGlhcnlfY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiBzZXRDb2xvciggdG8sICctLWdvLS1jb2xvci0tdGVydGlhcnknICkgKTtcblx0fSApO1xufTtcbiIsImNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0d3AuY3VzdG9taXplKCAnZGVzaWduX3N0eWxlJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0JCggJyNjdXN0b21pemUtcHJldmlldycgKS5hZGRDbGFzcyggJ2lzLWxvYWRpbmcnICk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0J3VuZGVmaW5lZCcgIT09IHR5cGVvZiBHb1ByZXZpZXdEYXRhLmRlc2lnbl9zdHlsZXMgJiZcblx0XHRcdFx0J3VuZGVmaW5lZCcgIT09IEdvUHJldmlld0RhdGEuZGVzaWduX3N0eWxlc1sgdG8gXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnN0IGRlc2lnblN0eWxlID0gR29QcmV2aWV3RGF0YS5kZXNpZ25fc3R5bGVzWyB0byBdO1xuXHRcdFx0XHRcdCQoICdsaW5rW2lkKj1cImRlc2lnbi1zdHlsZVwiXScgKS5hdHRyKCAnaHJlZicsIGRlc2lnblN0eWxlLnVybCApO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKCAnI2N1c3RvbWl6ZS1wcmV2aWV3JyApLnJlbW92ZUNsYXNzKCAnaXMtbG9hZGluZycgKTtcblx0XHRcdFx0XHR9LCA1MDAgKTtcblx0XHRcdFx0fSwgNTAwICk7IC8vIG1hdGNoIHRoZSAuMDJzIHRyYW5zaXRpb24gdGltZSBmcm9tIGNvcmVcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcblx0LyoqXG5cdCAqIFNldCB2aWV3cG9ydCBiYXNpc1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHNpemVcblx0ICovXG5cdGNvbnN0IHNldFZpZXdwb3J0QmFzaXMgPSAoIHNpemUgKSA9PiB7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby0tdmlld3BvcnQtYmFzaXMnLCBzaXplID8gc2l6ZSA6ICcxMDAwJyApO1xuXHR9O1xuXG5cdHdwLmN1c3RvbWl6ZSggJ3ZpZXdwb3J0X2Jhc2lzJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4gc2V0Vmlld3BvcnRCYXNpcyggdG8gKSApO1xuXHR9ICk7XG59O1xuIiwiaW1wb3J0IHsgaGV4VG9IU0wgfSBmcm9tICcuLi91dGlsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuJCggZG9jdW1lbnQgKS5yZWFkeSggc2V0TWVudUxvY2F0aW9uRGVzY3JpcHRpb24gKTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHR3cC5jdXN0b21pemUoICdmb290ZXJfdmFyaWF0aW9uJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0JCggJ2JvZHknIClcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCAnaGFzLWZvb3Rlci0xIGhhcy1mb290ZXItMiBoYXMtZm9vdGVyLTMgaGFzLWZvb3Rlci00JyApXG5cdFx0XHRcdC5hZGRDbGFzcyggJ2hhcy0nICsgdG8gKTtcblx0XHRcdHNldE1lbnVMb2NhdGlvbkRlc2NyaXB0aW9uKCk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnY29weXJpZ2h0JywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhbHVlLmJpbmQoIGZ1bmN0aW9uKCB0byApIHtcblx0XHRcdCQoICcuY29weXJpZ2h0JyApLmh0bWwoIHRvICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnZm9vdGVyX2JhY2tncm91bmRfY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHRjb25zdCBoc2wgPSBoZXhUb0hTTCggdG8gKTtcblx0XHRcdGNvbnN0IHNldFRvID0gdG8gPyBgaHNsKCR7IGhzbFsgMCBdIH0sICR7IGhzbFsgMSBdIH0lLCAkeyBoc2xbIDIgXSB9JSlgIDogdW5kZWZpbmVkO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby1mb290ZXItLWNvbG9yLS1iYWNrZ3JvdW5kJywgc2V0VG8gKTtcblxuXHRcdFx0Ly8gQWRkIGNsYXNzIGlmIGEgYmFja2dyb3VuZCBjb2xvciBpcyBhcHBsaWVkLlxuXHRcdFx0aWYgKCB0byApIHtcblx0XHRcdFx0JCggJ2JvZHknICkuYWRkQ2xhc3MoICdoYXMtZm9vdGVyLWJhY2tncm91bmQnICk7XG5cdFx0XHRcdCQoICcuc2l0ZS1mb290ZXInICkuYWRkQ2xhc3MoICdoYXMtYmFja2dyb3VuZCcgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoICdib2R5JyApLnJlbW92ZUNsYXNzKCAnaGFzLWZvb3Rlci1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0XHQkKCAnLnNpdGUtZm9vdGVyJyApLnJlbW92ZUNsYXNzKCAnaGFzLWJhY2tncm91bmQnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnc29jaWFsX2ljb25fY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHRjb25zdCBoc2wgPSBoZXhUb0hTTCggdG8gKTtcblx0XHRcdGNvbnN0IHNldFRvID0gdG8gPyBgaHNsKCR7IGhzbFsgMCBdIH0sICR7IGhzbFsgMSBdIH0lLCAkeyBoc2xbIDIgXSB9JSlgIDogdW5kZWZpbmVkO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby1zb2NpYWwtLWNvbG9yLS10ZXh0Jywgc2V0VG8gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdmb290ZXJfdGV4dF9jb2xvcicsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdGNvbnN0IGhzbCA9IGhleFRvSFNMKCB0byApO1xuXHRcdFx0Y29uc3Qgc2V0VG8gPSB0byA/IGBoc2woJHsgaHNsWyAwIF0gfSwgJHsgaHNsWyAxIF0gfSUsICR7IGhzbFsgMiBdIH0lKWAgOiB1bmRlZmluZWQ7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLWdvLWZvb3Rlci0tY29sb3ItLXRleHQnLCBzZXRUbyApO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby1mb290ZXItbmF2aWdhdGlvbi0tY29sb3ItLXRleHQnLCBzZXRUbyApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2Zvb3Rlcl9oZWFkaW5nX2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0Y29uc3QgaHNsID0gaGV4VG9IU0woIHRvICk7XG5cdFx0XHRjb25zdCBzZXRUbyA9IHRvID8gYGhzbCgkeyBoc2xbIDAgXSB9LCAkeyBoc2xbIDEgXSB9JSwgJHsgaHNsWyAyIF0gfSUpYCA6IG51bGw7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLWdvLWZvb3Rlci1oZWFkaW5nLS1jb2xvci0tdGV4dCcsIHNldFRvICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgR29QcmV2aWV3RGF0YS5zb2NpYWxJY29ucy5sZW5ndGg7IGkrKyApIHtcblx0XHR3cC5jdXN0b21pemUoIGBzb2NpYWxfaWNvbl8keyBHb1ByZXZpZXdEYXRhLnNvY2lhbEljb25zWyBpIF0gfWAsICggdmFsdWUgKSA9PiB7XG5cdFx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0XHRpZiAoIHRvICkge1xuXHRcdFx0XHRcdCQoIGAuc29jaWFsLWljb24tJHsgR29QcmV2aWV3RGF0YS5zb2NpYWxJY29uc1sgaSBdIH1gICkucmVtb3ZlQ2xhc3MoICdkaXNwbGF5LW5vbmUnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JCggYC5zb2NpYWwtaWNvbi0keyBHb1ByZXZpZXdEYXRhLnNvY2lhbEljb25zWyBpIF0gfWAgKS5hZGRDbGFzcyggJ2Rpc3BsYXktbm9uZScgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxufTtcblxuZnVuY3Rpb24gc2V0TWVudUxvY2F0aW9uRGVzY3JpcHRpb24oKSB7XG5cdGNvbnN0IG1lbnVMb2NhdGlvbnNEZXNjcmlwdGlvbiA9ICQoICcuY3VzdG9taXplLXNlY3Rpb24tdGl0bGUtbWVudV9sb2NhdGlvbnMtZGVzY3JpcHRpb24nICkudGV4dCgpO1xuXHRjb25zdCBtZW51TG9jYXRpb25Db3VudCA9IFsgJ2Zvb3Rlci0xJywgJ2Zvb3Rlci0yJyBdLmluY2x1ZGVzKCB3cC5jdXN0b21pemUoICdmb290ZXJfdmFyaWF0aW9uJyApLmdldCgpICkgPyAnMicgOiAnNCc7XG5cdCQoICcuY3VzdG9taXplLXNlY3Rpb24tdGl0bGUtbWVudV9sb2NhdGlvbnMtZGVzY3JpcHRpb24nICkudGV4dCggbWVudUxvY2F0aW9uc0Rlc2NyaXB0aW9uLnJlcGxhY2UoIC9bMC05XS9nLCBtZW51TG9jYXRpb25Db3VudCApICk7XG59XG4iLCJpbXBvcnQgeyBoZXhUb0hTTCB9IGZyb20gJy4uL3V0aWwnO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHdwLmN1c3RvbWl6ZSggJ2hlYWRlcl92YXJpYXRpb24nLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHQkKCAnYm9keScgKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoICdoYXMtaGVhZGVyLTEgaGFzLWhlYWRlci0yIGhhcy1oZWFkZXItMyBoYXMtaGVhZGVyLTQgaGFzLWhlYWRlci01IGhhcy1oZWFkZXItNiBoYXMtaGVhZGVyLTcnIClcblx0XHRcdFx0LmFkZENsYXNzKCAnaGFzLScgKyB0byApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2hlYWRlcl9iYWNrZ3JvdW5kX2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0Y29uc3QgaHNsID0gaGV4VG9IU0woIHRvICk7XG5cdFx0XHRjb25zdCBzZXRUbyA9IHRvID8gYGhzbCgkeyBoc2xbIDAgXSB9LCAkeyBoc2xbIDEgXSB9JSwgJHsgaHNsWyAyIF0gfSUpYCA6IHVuZGVmaW5lZDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6cm9vdCcgKS5zdHlsZS5zZXRQcm9wZXJ0eSggJy0tZ28taGVhZGVyLS1jb2xvci0tYmFja2dyb3VuZCcsIHNldFRvICk7XG5cblx0XHRcdC8vIEFkZCBjbGFzcyBpZiBhIGJhY2tncm91bmQgY29sb3IgaXMgYXBwbGllZC5cblx0XHRcdGlmICggdG8gKSB7XG5cdFx0XHRcdCQoICcuaGVhZGVyJyApLmFkZENsYXNzKCAnaGFzLWJhY2tncm91bmQnICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCAnLmhlYWRlcicgKS5yZW1vdmVDbGFzcyggJ2hhcy1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2hlYWRlcl90ZXh0X2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0Y29uc3QgaHNsID0gaGV4VG9IU0woIHRvICk7XG5cdFx0XHRjb25zdCBzZXRUbyA9IHRvID8gYGhzbCgkeyBoc2xbIDAgXSB9LCAkeyBoc2xbIDEgXSB9JSwgJHsgaHNsWyAyIF0gfSUpYCA6IHVuZGVmaW5lZDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6cm9vdCcgKS5zdHlsZS5zZXRQcm9wZXJ0eSggJy0tZ28tbmF2aWdhdGlvbi0tY29sb3ItLXRleHQnLCBzZXRUbyApO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby1zaXRlLWRlc2NyaXB0aW9uLS1jb2xvci0tdGV4dCcsIHNldFRvICk7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLWdvLXNlYXJjaC1idXR0b24tLWNvbG9yLS10ZXh0Jywgc2V0VG8gKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6cm9vdCcgKS5zdHlsZS5zZXRQcm9wZXJ0eSggJy0tZ28tc2l0ZS10aXRsZS0tY29sb3ItLXRleHQnLCBzZXRUbyApO1xuXHRcdH0gKTtcblx0fSApO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0LyoqXG5cdCAqIFNldCBMb2dvIHdpZHRoLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHdpZHRoXG5cdCAqL1xuXHRjb25zdCBzZXRMb2dvV2lkdGggPSAoIHdpZHRoICkgPT4ge1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSggJy0tZ28tbG9nby0tbWF4LXdpZHRoJywgd2lkdGggPyBgJHsgd2lkdGggfXB4YCA6ICdub25lJyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgTG9nbyBtb2JpbGUgd2lkdGguXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gd2lkdGhcblx0ICovXG5cdGNvbnN0IHNldExvZ29Nb2JpbGVXaWR0aCA9ICggd2lkdGggKSA9PiB7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby1sb2dvLW1vYmlsZS0tbWF4LXdpZHRoJywgd2lkdGggPyBgJHsgd2lkdGggfXB4YCA6ICdub25lJyApO1xuXHR9O1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2xvZ29fd2lkdGgnLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiBzZXRMb2dvV2lkdGgoIHRvICkgKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2xvZ29fd2lkdGhfbW9iaWxlJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4gc2V0TG9nb01vYmlsZVdpZHRoKCB0byApICk7XG5cdH0gKTtcbn07XG4iLCJjb25zdCAkID0galF1ZXJ5OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0d3AuY3VzdG9taXplKCAncGFnZV90aXRsZXMnLCAoIHZhbHVlICkgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdG9ycyA9ICcjY29udGVudCA+IC5lbnRyeS1oZWFkZXIsIGJvZHkucGFnZSBhcnRpY2xlIC5lbnRyeS1oZWFkZXIsIGJvZHkud29vY29tbWVyY2UgLmVudHJ5LWhlYWRlcic7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdGlmICggdG8gKSB7XG5cdFx0XHRcdCQoICdib2R5JyApLmFkZENsYXNzKCAnaGFzLXBhZ2UtdGl0bGVzJyApO1xuXHRcdFx0XHQkKCBzZWxlY3RvcnMgKS5yZW1vdmVDbGFzcyggJ2Rpc3BsYXktbm9uZScgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoICdib2R5JyApLnJlbW92ZUNsYXNzKCAnaGFzLXBhZ2UtdGl0bGVzJyApO1xuXHRcdFx0XHQkKCBzZWxlY3RvcnMgKS5hZGRDbGFzcyggJ2Rpc3BsYXktbm9uZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcbn07XG4iLCIvKipcbiAqIEZ1bmN0aW9ucyB0byBjb252ZXJ0IGhleCBjb2xvciB0byBIU0xcbiAqXG4gKiBAcGFyYW0geyp9IEhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhleFRvSFNMKCBIICkge1xuXHQvLyBDb252ZXJ0IGhleCB0byBSR0IgZmlyc3Rcblx0bGV0IGIgPSAwO1xuXHRsZXQgZyA9IDA7XG5cdGxldCByID0gMDtcblx0aWYgKCA0ID09PSBILmxlbmd0aCApIHtcblx0XHRyID0gYDB4JHsgSFsgMSBdIH0keyBIWyAxIF0gfWA7XG5cdFx0ZyA9IGAweCR7IEhbIDIgXSB9JHsgSFsgMiBdIH1gO1xuXHRcdGIgPSBgMHgkeyBIWyAzIF0gfSR7IEhbIDMgXSB9YDtcblx0fSBlbHNlIGlmICggNyA9PT0gSC5sZW5ndGggKSB7XG5cdFx0ciA9IGAweCR7IEhbIDEgXSB9JHsgSFsgMiBdIH1gO1xuXHRcdGcgPSBgMHgkeyBIWyAzIF0gfSR7IEhbIDQgXSB9YDtcblx0XHRiID0gYDB4JHsgSFsgNSBdIH0keyBIWyA2IF0gfWA7XG5cdH1cblxuXHQvLyBUaGVuIHRvIEhTTFxuXHRyIC89IDI1NTtcblx0ZyAvPSAyNTU7XG5cdGIgLz0gMjU1O1xuXG5cdGNvbnN0IGNtYXggPSBNYXRoLm1heCggciwgZywgYiApO1xuXHRjb25zdCBjbWluID0gTWF0aC5taW4oIHIsIGcsIGIgKTtcblx0Y29uc3QgZGVsdGEgPSBjbWF4IC0gY21pbjtcblxuXHRsZXQgaCA9IDA7XG5cdGxldFx0cyA9IDA7XG5cdGxldCBsID0gMDtcblxuXHRpZiAoIDAgPT09IGRlbHRhICkge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKCBjbWF4ID09PSByICkge1xuXHRcdGggPSAoICggZyAtIGIgKSAvIGRlbHRhICkgJSA2O1xuXHR9IGVsc2UgaWYgKCBjbWF4ID09PSBnICkge1xuXHRcdGggPSAoICggYiAtIHIgKSAvIGRlbHRhICkgKyAyO1xuXHR9IGVsc2Uge1xuXHRcdGggPSAoICggciAtIGcgKSAvIGRlbHRhICkgKyA0O1xuXHR9XG5cblx0aCA9IE1hdGgucm91bmQoIGggKiA2MCApO1xuXG5cdGlmICggMCA+IGggKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKCBjbWF4ICsgY21pbiApIC8gMjtcblx0cyA9IDAgPT09IGRlbHRhID8gMCA6IGRlbHRhIC8gKCAxIC0gTWF0aC5hYnMoICggMiAqIGwgKSAtIDEgKSApO1xuXHRzID0gKyggcyAqIDEwMCApLnRvRml4ZWQoKTtcblx0bCA9ICsoIGwgKiAxMDAgKS50b0ZpeGVkKCk7XG5cblx0cmV0dXJuIFsgaCwgcywgbCBdO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ29sb3JTY2hlbWVQcmV2aWV3IGZyb20gJy4vY3VzdG9taXplL3ByZXZpZXcvY29sb3Itc2NoZW1lcyc7XG5pbXBvcnQgRGVzaWduU3R5bGVQcmV2aWV3IGZyb20gJy4vY3VzdG9taXplL3ByZXZpZXcvZGVzaWduLXN0eWxlJztcbmltcG9ydCBGb290ZXJDb2xvcnNQcmV2aWV3IGZyb20gJy4vY3VzdG9taXplL3ByZXZpZXcvZm9vdGVyJztcbmltcG9ydCBIZWFkZXJDb2xvcnNQcmV2aWV3IGZyb20gJy4vY3VzdG9taXplL3ByZXZpZXcvaGVhZGVyJztcbmltcG9ydCBMb2dvU2l6aW5nUHJldmlldyBmcm9tICcuL2N1c3RvbWl6ZS9wcmV2aWV3L2xvZ28tc2l6aW5nJztcbmltcG9ydCBQYWdlVGl0bGVzUHJldmlldyBmcm9tICcuL2N1c3RvbWl6ZS9wcmV2aWV3L3BhZ2UtdGl0bGVzJztcblxuRGVzaWduU3R5bGVQcmV2aWV3KCk7XG5IZWFkZXJDb2xvcnNQcmV2aWV3KCk7XG5Gb290ZXJDb2xvcnNQcmV2aWV3KCk7XG5Db2xvclNjaGVtZVByZXZpZXcoKTtcbkxvZ29TaXppbmdQcmV2aWV3KCk7XG5QYWdlVGl0bGVzUHJldmlldygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
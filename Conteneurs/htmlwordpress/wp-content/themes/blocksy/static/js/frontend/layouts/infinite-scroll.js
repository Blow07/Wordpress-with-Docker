import InfiniteScroll from 'infinite-scroll'
import { watchLayoutContainerForReveal } from '../animated-element'
import ctEvents from 'ct-events'

/**
 * Monkey patch imagesLoaded. We are using here another strategy for detecting
 * images loaded event.
 */
InfiniteScroll.imagesLoaded = (fragment, fn) => fn()
InfiniteScroll.Button.prototype.hide = () => {}

export const mount = (paginationContainer) => {
	let layoutEl = [...paginationContainer.parentNode.children]
		.reduce(
			(a, c) => {
				return [...a, ...c.children]
			},
			[...paginationContainer.parentNode.children]
		)
		.find(
			(c) =>
				c.classList.contains('products') ||
				c.classList.contains('entries')
		)

	if (!paginationContainer) return

	let paginationType = paginationContainer.dataset.pagination

	if (paginationType.indexOf('simple') > -1) return
	if (paginationType.indexOf('next_prev') > -1) return

	if (!paginationContainer.querySelector('.next')) return

	if (paginationContainer.infiniteScroll) {
		return
	}

	let inf = new InfiniteScroll(layoutEl, {
		// debug: true,
		checkLastPage: '.ct-pagination .next',
		path: '.ct-pagination .next',
		append: getAppendSelectorFor(layoutEl),
		button:
			paginationType === 'load_more'
				? paginationContainer.querySelector('.ct-load-more')
				: null,

		outlayer: null,

		scrollThreshold: paginationType === 'infinite_scroll' ? 400 : false,

		onInit() {
			this.on('load', (response) => {
				paginationContainer
					.querySelector('.ct-load-more-helper')
					.classList.remove('ct-loading')

				setTimeout(() => {
					ctEvents.trigger('ct:infinite-scroll:load')
					ctEvents.trigger('blocksy:frontend:init')
					ctEvents.trigger('blocksy:parallax:init')
					if (window.jQuery) {
						jQuery(document.body).trigger(
							'wc_price_based_country_ajax_geolocation'
						)
					}
				}, 100)
			})

			this.on('append', () => {
				watchLayoutContainerForReveal(layoutEl)
				;[...layoutEl.querySelectorAll('[srcset]')].forEach((el) => {
					const prev = el.srcset
					el.srcset = ''
					el.srcset = prev
				})
			})

			this.on('request', () => {
				paginationContainer
					.querySelector('.ct-load-more-helper')
					.classList.add('ct-loading')
			})

			this.on('last', () => {
				paginationContainer.classList.add(
					!paginationContainer.querySelector('.ct-last-page-text')
						? 'ct-last-page-no-info'
						: 'ct-last-page'
				)
			})
		},
	})

	paginationContainer.infiniteScroll = inf
}

function getAppendSelectorFor(layoutEl) {
	let layoutIndex = [...layoutEl.parentNode.children].indexOf(layoutEl)

	if (layoutEl.closest('.ct-posts-shortcode')) {
		let layoutIndex = [...layoutEl.parentNode.parentNode.children].indexOf(
			layoutEl.parentNode
		)

		return layoutEl.classList.contains('products')
			? `.ct-posts-shortcode:nth-child(${layoutIndex + 1}) .products > li`
			: `.ct-posts-shortcode:nth-child(${layoutIndex + 1}) .entries > *`
	}

	if (layoutEl.classList.contains('products')) {
		let layoutIndex = [...layoutEl.parentNode.children].indexOf(layoutEl)

		const hasMoreThanOneProductsList =
			layoutEl.closest('#main').querySelectorAll('.products').length > 1

		if (hasMoreThanOneProductsList) {
			return `#main .products:nth-child(${layoutIndex + 1}) > li`
		}

		return `#main .products > li`
	}

	return `section > .entries > *`
}

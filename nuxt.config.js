export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "pwa-example",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ hid: "description", name: "description", content: "" }
		],
		// link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/bootstrap-vue-icons.js', ssr: true}
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/device',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		"bootstrap-vue/nuxt",
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// https://go.nuxtjs.dev/pwa
		"@nuxtjs/pwa"
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		icon: {
			source: './static/img/logo.png'
		},
		manifest: {
			name: 'PWA Courses',
			short_name: 'Courses',
			start_url: '/',
			background_color: "#FF0000",
			theme_color: "#FF0",
			lang: "pt-BR"
		},
		meta:{
			name: 'PWA Courses',
			description: 'Courses free',
			lang: 'pt-BR'
		},
		workbox:{
			enabled: true,
			// offlineAssets: ['/img']
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
};

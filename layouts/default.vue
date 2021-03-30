<template>
	<div>
		<Header v-if="$device.isDesktop" />
		<TabNavigation v-else/>
		<b-container>
			<Nuxt />
		</b-container>
	</div>
</template>
<script>
import TabNavigation from '~/components/MobileApp/menu'
import Header from '~/components/Desktop/Header'
export default {
	components:{
		Header,
		TabNavigation
	},
	async mounted(){
		console.log('kdsksd')
		const workbox = await window.$workbox;
		console.log(workbox)
		// console.log(this.$workbox, 'oo')
	}
}
</script>


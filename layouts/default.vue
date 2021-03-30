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
}
</script>


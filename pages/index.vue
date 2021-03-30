<template>
	<div>
		<TabNavigation/>
		<courses/>
	</div>
</template>
<script>
import TabNavigation from '~/components/MobileApp/menu'
import courses from '~/components/courses'
export default {
	components:{
		courses,
		TabNavigation
	},
}
</script>

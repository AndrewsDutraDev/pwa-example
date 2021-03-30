<template>
	<div>
		<b-nav >
			<b-nav-item  :href="item.link" v-for="(item, index) in menu" :key="index" >{{item.name}}</b-nav-item>
		</b-nav>
	</div>
</template>
<script>
import menuData from '~/data/menu.json'
export default {
	data() {
		return {
			menu: menuData
		}
	}

}
</script>


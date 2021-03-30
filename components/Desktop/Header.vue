<template>
	<div>
		<b-container>
			<b-nav class="nav">
				<b-navbar-brand href="#">
					<b-img class="image_logo mx-5" src="/img/logo.png"></b-img>
				</b-navbar-brand>

				<b-nav-item class="my-auto item_menu" :to="item.link" v-for="(item, index) in menu" :key="index" >
					<div class="d-flex">
						<b-icon class="mr-2" :icon="item.icon"></b-icon>
						{{item.name}}
					</div>
				</b-nav-item>
			</b-nav>
		</b-container>
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
<style>
a {
	color:#3C3A36;
}
.nav {
	border: 1px solid #BEBAB3;
	box-sizing: border-box;
	border-radius: 25px;
	border-top-right-radius: 0;
	border-top-left-radius: 0;
	box-shadow: 2px -2px 12px -7px rgb(0 0 0);
}
.nav-link{
	color:#3C3A36;
}
.image_logo{
	width: 60px;
	height: auto;
}
</style>


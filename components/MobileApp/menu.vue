<template>
    <div class="navigation-tab">
        <div class="icons-navigation">
            <div v-for="item in menu" :key="item.id" class="text-center">
				<b-link :to="item.link">
					<b-icon :icon="item.icon"></b-icon>
					<div> {{item.name}} </div>
				</b-link>

            </div>
        </div>
    </div>
</template>
<script>
import menuData from '~/data/menu.json'
export default {

    data(){
        return{
            menu: menuData
        }
    }
}
</script>
<style>
.navigation-tab {
    position: fixed;
    z-index: 100;
	padding: 10px 0px ;
    bottom: 0;
    width: 100%;
	background: #fff;
	border-radius: 12px;
	border: 1px solid #BEBAB3;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
	box-shadow: 2px -2px 12px -7px rgb(0 0 0);
}
.icons-navigation {
    display: flex;
    justify-content: space-around;
}
</style>

<template>
    <div class="navigation-tab">
        <div class="icons-navigation">
            <div v-for="item in menu" :key="item.id" class="text-center">
                <div>
                    <b-icon :icon="item.icon"></b-icon>
                </div>
                <div> {{item.name}} </div>
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
.navigation-tab{
    position: fixed;
    z-index: 100;
    bottom: 0;
    width: 100%;
    background-color: #f8f8f8;
    
}
.icons-navigation{
    display: flex;
    justify-content: space-around;
}
</style>

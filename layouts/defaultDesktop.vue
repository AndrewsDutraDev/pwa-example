<template>
    <div>
		<b-container >
			<Header />
			<Nuxt />
		</b-container>
    </div>
</template>
<script>
import Header from "~/components/Desktop/Header.vue"

export default {
	components:{
		Header
	}
}
</script>

<template>
	<div>
		<b-row class="text-center">
			<b-col cols="12">
				<div class="title">
					Perfil
				</div>
			</b-col>
			<b-col class="my-4" cols="12">
				<b-img class="image_profile" src="/img/profile.png"></b-img>
			</b-col>
			<b-col  cols="12" md="4">
				<b-button class="my_btn w-75 my-2 py-2 ">Seus Cursos</b-button>
			</b-col>
			<b-col  cols="12" md="4">
				<b-button class="my_btn w-75 my-2 py-2 ">Salvos</b-button>
			</b-col>
			<b-col  cols="12" md="4">
				<b-button class="my_btn w-75 my-2 py-2 ">Meus Dados</b-button>
			</b-col>
			<b-col class="my-5" cols="12">
				<b-button  variant="light" class="py-2 ">Log out</b-button>
			</b-col>
		</b-row>
	</div>
</template>
<style scoped>
.title {
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 32px;
	text-align: center;
	letter-spacing: -0.5px;

}
.image_profile {
	border: 4px solid #65AAEA;
	border-radius: 50%;
}
.my_btn{
	background: #FFFFFF;
	border: 1px solid #BEBAB3;
	box-sizing: border-box;
	border-radius: 12px;
	color:#3C3A36;
}
</style>

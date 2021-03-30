<template>
    <b-container>
        <div class="text-center mt-4 title mb-3"> Configurações </div>
        <b-img src="/img/bike.png" center fluid alt="Bike Image" class="mt-2"></b-img>
        <b-row class="text-center mt-4">
			<b-col cols="12">
                <div class="d-flex w-100 flex-row settings-btn justify-content-between">
                    <div class="d-flex">
                        <b-iconstack font-scale="2">
                            <b-icon stacked icon="circle-fill" variant="info"></b-icon>
                            <b-icon stacked icon="bell-fill" scale="0.5" variant="white"></b-icon>
                            <b-icon stacked icon="circle" variant="light"></b-icon>
                        </b-iconstack>
                        <div class="my-auto ml-2">Notificações</div>
                    </div>
                    <b-form-checkbox name="check-button" switch class="my-auto"></b-form-checkbox>
                </div>
			</b-col>
            <b-col cols="12">
                <div class="d-flex w-100 flex-row settings-btn justify-content-between">
                    <div class="d-flex">
                        <b-iconstack font-scale="2">
                            <b-icon stacked icon="circle-fill" variant="info"></b-icon>
                            <b-icon stacked icon="person" scale="0.5" variant="white"></b-icon>
                            <b-icon stacked icon="circle" variant="light"></b-icon>
                        </b-iconstack>
                        <div class="my-auto ml-2">Nome</div>
                    </div>
                    <b-icon icon="chevron-right" class="my-auto"></b-icon>
                </div>
			</b-col>
            <b-col cols="12">
                <div class="d-flex w-100 flex-row settings-btn justify-content-between">
                    <div class="d-flex">
                        <b-iconstack font-scale="2">
                            <b-icon stacked icon="circle-fill" variant="info"></b-icon>
                            <b-icon stacked icon="mailbox" scale="0.5" variant="white"></b-icon>
                            <b-icon stacked icon="circle" variant="light"></b-icon>
                        </b-iconstack>
                        <div class="my-auto ml-2">Email</div>
                    </div>
                    <b-icon icon="chevron-right" class="my-auto"></b-icon>
                </div>
			</b-col>
		</b-row>
    </b-container>
</template>
<script>
export default {
    
}
</script>
<style>
.settings-btn{
    padding: 10px;
    margin-bottom: 10px;
    background-color: #FFFFFF;
    color: #000;
    border: 1px solid #969699;
    border-radius: 15px;
}
.title {
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 32px;
	text-align: center;
	letter-spacing: -0.5px;

}
</style>
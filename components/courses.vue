<template>
    <b-container class="courses-content">
        <b-row>
            <b-col cols=12 class="text-center mb-3 mt-3"> Your Courses </b-col>
            <b-col sm="12" md="6" lg="4" v-for="course in courses" :key="course.id">
                <b-card-group deck>
                    <b-card :img-src="course.img" :img-alt="course.name" img-top>
                        <b-card-text>
                            <div>{{course.time}} horas</div>
                            <div v-html="course.title"></div>
                            <div v-html="course.description"></div>
                        </b-card-text>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import coursesData from '~/data/courses.json'
export default {
	data(){
		return{
			courses: coursesData
		}
	}
}
</script>
<style>
.courses-content{
    margin-bottom: 70px;
}
</style>
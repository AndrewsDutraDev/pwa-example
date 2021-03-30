<template>
	<b-container>
		<b-row>
			<b-col cols=12 class="text-center"> Your Courses </b-col>
			<b-col v-for="course in courses" :key="course.id">
				{{courses}}
			</b-col>
			
		</b-row>
	</b-container>
</template>
<script>
import coursesData from '../data/courses.json'
export default {
	data(){
		return{
			courses: coursesData
		}
	}
}

</script>

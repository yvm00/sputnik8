<template>
    <div>
        <h1>Экскурсии по всему миру</h1>
        <tour-list :tours="tours"/>
        <button @click="fetchTours">tours</button>
    </div>
    
</template>

<script>
import axios from 'axios';
import TourList from "@/components/TourList.vue";
export default {
    components: {
        TourList
    },
    data(){
        return {
            tours: [ ]
        }
    },
    methods: {
        async fetchTours(){  
            try{
                const options = {
                method: "GET",
                url: "http://localhost:8080/",
                };
                const response = await axios.request(options)
                this.tours = response.data;
            }     
            catch(error) {
                console.log(error);
            };
        }
    }
}
</script>

<style lang="scss" scoped>


</style>
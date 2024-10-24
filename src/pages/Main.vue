<template>
    <div>
        <h1>Экскурсии по всему миру</h1>
        <!-- <select :value="id" @change="changeOption">
            <option disabled value="">Выберите город</option>
            <option v-for="city in cities" :key="city.value" :value="city.value">
                {{ city.name }}
            </option>
        </select> -->
        <my-select           
            v-model="selectedSort"
            :options="cities"
        />
        <tour-list :tours="sortedTours"/>
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
            tours: [],
            cities: [],
            selectedSort: '',
        }
    },
    methods: {
        // getId(){
        //     this.cities.forEach((city) => {
        //         this.cityId = city.id;
        //         this.cityName = city.name;
        //     })
        //     console.log(cityId, cityName )
            
        // },
        try(){
            console.log(this.selectedSort)
        },
        async fetchTours(){  
                // const options = {
                // method: "GET",
                // url: "https://jsonplaceholder.typicode.com/posts",
                // };
                const res = await fetch("https://api.sputnik8.com/v1/products?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com")
                .then((response)  => response.json())
                .then((data) => {
                    this.tours = data
                })
                .catch((error)=>{
                    console.log(error);
                });
        },
        async fetchCities(){  
                // const options = {
                // method: "GET",
                // url: "https://jsonplaceholder.typicode.com/posts",
                // };
                const res = await fetch("https://api.sputnik8.com/v1/cities?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com")
                .then((response)  => response.json())
                .then((data) => {
                    this.cities = data
                })
                .catch((error)=>{
                    console.log(error);
                });
        },       
    },
    mounted(){
        this.fetchCities()
        this.fetchTours()
    },
    computed: {
        sortedTours(){
            let sorted = []
            this.tours.forEach((tour) => {
                if(tour.city_id == this.selectedSort){
                    sorted.push(tour)
                }
            })
            return sorted
        }       
    },

}
</script>

<style lang="scss" scoped>


</style>
<template>
    <div>
        <h1>Экскурсии по всему миру</h1>
        <div class="m-30">
            <input-field
                v-model="searchSort"
                @delete="deleteSearch"
            />
            <drop-down           
                v-model="selectedSort"
                :options="cities"
            />
        </div>
       
        <div >
            <tour-list :tours="searchTours"/>
            <div v-if="searchTours.length == 0">
                <p>ничего нет</p>
                <button @click="resetFilters">
                    Сбросить фильтры
                </button>
            </div>
        </div>
        
        
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
            searchSort: '',
        }
    },
    methods: {      
        resetFilters(){
            this.selectedSort = ''
            this.searchSort = ''
        },
        deleteSearch(){
            this.searchSort = ''
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
        },

        searchTours(){
            if (this.searchSort.length !== 0 ){
                if (this.selectedSort.length > 0){
                    return this.sortedTours.filter(tour => tour.title.includes(this.searchSort))
                }
                else{
                    return this.tours.filter(tour => tour.title.includes(this.searchSort))
                }
            } 
            else {
                return 0
            }         
            
        }

    },

}
</script>

<style lang="scss" scoped>


</style>
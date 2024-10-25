<template>
    <div>
        <h1 class="m-20">Экскурсии по всему миру</h1>
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

        <div  v-if="this.selectedSort.length > 0 || this.searchSort.length > 0 ">
                <tour-list :tours="searchTours"/>
                <div class="reset p-30" v-if="searchTours.length == 0">
                    <p>Поиск не дал результатов</p>
                    <my-button class=" m-30" @click="resetFilters">
                        Сбросить фильтры
                    </my-button>
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
        // async fetchTours(){ 
        //     try{
        //         const options = {
        //         method: "GET",
        //         url: "http://localhost:8080/",
        //         };
        //         const  res = await axios.request(options)
        //         this.tours = res.data;
        //     } 
        //     catch(error) {
        //         console.log(error);
        //     };
        // },
        // async fetchCities(){  
        //     try{
        //         const options = {
        //         method: "GET",
        //         url: "http://localhost:8081/",
        //         };
        //         const res = await axios.request(options)
        //         this.cities = res.data;
        //     } 
        //     catch(error) {
        //         console.log(error);
        //     };
            
        // },       
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
            let searched = ''            
            console.log(this.searchSort)                
            if(this.selectedSort.length > 0){
                searched = this.sortedTours.filter(tour => tour.title.includes(this.searchSort))
            }
            else if (this.searchSort.length > 0){
                searched = this.tours.filter(tour => tour.title.includes(this.searchSort))
            }
            return searched           
        }

    },

}
</script>

<style lang="scss" scoped>
.reset{
    margin-top:10%;
}

</style>
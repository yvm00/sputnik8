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
                // const options = {
                // method: "GET",
                // url: "https://jsonplaceholder.typicode.com/posts",
                // };
                const res = await fetch("https://api.sputnik8.com/v1/products?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com")
                .then((response)  => response.json())
                .then((data) => {
                    this.tours = data
                })

                // return new Response(JSON.stringify(res), {
                //     headers: {
                //     'Access-Control-Allow-Origin': '*'
                //     }
                // });
                .catch((error)=>{
                    console.log(error);
                });
        }
    }
}
</script>

<style lang="scss" scoped>


</style>
<template>
    <div class="tours" v-if="tours.length > 0">
        <tour-item 
             v-for="tour in tours"
             :tour="tour"
        />
    </div> 
    
</template>

<script>
import TourItem from "@/components/TourItem.vue";
export default{
    components: {TourItem},
    props: {
        tours: {
            type: Array,
            required: true
        }
    }

}
</script>

<style scoped>
.tours{
    display: flex;
    gap: 10px; 
    flex-wrap: wrap;
}
</style>
<template>
    <div>
        <p>{{ tour.title }}</p>
        <!-- <p>{{ tour.activity_type }}</p>
        <p>{{ tour.title }}</p>
        <p>{{ tour.customers_review_rating }}</p>
        <p>{{ tour.order_options.order_lines.price }}</p> -->
    </div>
</template>

<script>
export default{
    props: {
        tour:{
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>
<template>
    <div>
        <p>{{ tour.id }}</p>
        <p>{{ tour.title }}</p>
        <p>{{ tour.body }}</p>
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
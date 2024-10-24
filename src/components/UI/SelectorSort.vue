<template>
    <select :value="modelValue" @change="changeOption">
        <option disabled value="">Выберите город</option>
        <option v-for="option in options" :key="option.id" :value="option.id">
            {{ option.name }}
        </option>

    </select>
    
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: Number
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event){
            this.$emit('update:modelValue', event.target.value)
            console.log(event.target.value)
        }

    }
}

</script>

<style lang="scss" scoped>

</style>
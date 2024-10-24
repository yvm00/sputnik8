<template>
    <input class="input" :value="modelValue" @input="updateInput" type="text">    
</template>

<script>
export default {
    name: 'input-field',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.input{
    border: 1px solid lighten($color-main, 10%) !important;
}
</style>
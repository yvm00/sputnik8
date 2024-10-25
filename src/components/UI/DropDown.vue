<template>
    <select class="dropdown m-20 " :value="modelValue" @change="changeOption">
        <option disabled value="">Выбрать город</option>
        <option v-for="option in options" :key="option.id" :value="option.id">
            {{ option.name }}
        </option>

    </select>
    
</template>

<script>
export default {
    name: 'drop-down',
    props: {
        modelValue: {
            type: [String, Number]
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
@import '@/assets/scss/variables.scss';
.dropdown{
    border: 1px solid $color-light;
    color: $color-light; 
    padding: 7px 10px;  
    width: 220px;
    cursor: pointer;

    &:focus-visible {
        outline:none;
        border: 1px solid $color-focus;
    }
    
}
</style>
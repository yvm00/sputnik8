<template>
    <form class="search">
        <input ref="input" class="search__input" :value="modelValue" @input="updateInput" placeholder="Введите название экскурсии" type="text">    
        <button @click.prevent="$emit('delete', '')" class="search__btn">x</button>
    </form>
    
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
        },
        // delete(event){
        //     console.log(this.modelValue)
        //     this.modelValue = "";
        // }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.search{
    display:inline-flex;
    justify-content: space-between;
    border: 1px solid $color-light;
    padding: 7px 10px; 
    width: 220px;
        &:focus {
            border: 1px solid $color-focus !important;
        }     
        &__btn{
            color: $color-light;
            background-color: transparent;
            border: none;
        }
        &__input{
            color: $color-light ;     
            border:none;
                &:focus-visible{
                    outline: none;
                }
                &::placeholder{
                    color: $color-light;
                } 
        }
           
}


    

</style>
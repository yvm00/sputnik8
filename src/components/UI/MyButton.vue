<template>
<button class="btn">
    <slot></slot>
</button>
</template>

<script>
export default {
    name: 'my-button',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.btn{
    padding: 10px;
    background-color: $color-btn;
    color: $color-btn-text;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: lighten($color-btn, 30%); 
    }
}
</style>
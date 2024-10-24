<template>
    <div class="tour">
        <img class="tour__img"
        :src= "tour.main_photo.big"/>        
        <div class="tour__rating mt-10">
            <img src="@/assets/star.png"/>           
            {{ tour.customers_review_rating }}
            <span>
                ({{ tour.reviews}}) 
            </span>
        </div>
        <p>{{ tour.city_slug }}</p>
        <p class="tour__title">{{ tour.title }}</p>     
        <div class="tour__price mt-10">
            <p>от {{ roundedPrice }} ₽</p>
            <span>{{ tour.order_options[0].order_lines[0].price_per}}</span>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            roundedPrice: 0,
        }        
    },
    props: {
        tour:{
            type: Object,
            required: true,
        }
    },
    methods: {
        roundedValue(){
            this.roundedPrice = Math.trunc(this.tour.order_options[0].order_lines[0].all_prices.RUB);                  
        }
    },
    mounted(){
        this.roundedValue();
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.tour{
    text-align: start;
    min-height: 332px;
    max-width: 345px;
    padding: 10px;

    &__img{
        width: 100%;
        border-radius: 5px;
    }

    &__title{
        font-weight: 700;
        font-size: 16px;
    }
    span{
        color: lighten($color-main, 70%); 
        font-size: 13px;
    }
    &__price{
        font-weight: 700;
        font-size: 24px;
        color: lighten($color-main, 30%); 
    }
}
.mt-10{
    margin-top: 10px;
}
</style>
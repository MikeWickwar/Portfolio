<template>
    <div>
    <b-card
        :title="title"
        :img-src="img"
        img-alt="Image"
        img-top
        img-max
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 card">
        <b-card-text>
            <slot name="childCardComponent"></slot>
        </b-card-text>

        <b-button :href="urlForCardBtn" target="_blank" variant="primary">{{btnText}}</b-button>
    </b-card>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        components: {
        },
        props:{
            title: String,
            urlForCardBtn: String,
            img: String,
            btnText: String
        }
    }
</script>

<style scoped>
    .card{
        position: relative;
        z-index: 1;
        margin: 20px;
        max-height: 500px;
        overflow: auto;
    }
    img.card-img-top{
        max-height: 165px;
        filter: hue-rotate(340deg);
    }
</style>


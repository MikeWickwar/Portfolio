<template>
    <b-card
        :img-href="projectDetailsUrl"
        :img-src="img"
        img-alt="Image"
        img-top
        img-max
        :title="title"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 card">
    </b-card>
</template>

<script>
    export default {
        name: 'CardComponent',
        components: {
        },
        props:{
            title: String,
            img: String,
            deployUrl: {
                type: String,
                default: null
            },
            projectDetailsUrl: {
                type: String,
                default: ""
            },
            projectId: String,
            urlForCardBtn: String,
            btnText: String,
        }
    }
    
</script>

<style scoped>
    .card{
        position: relative;
        z-index: 1;
        margin: 20px;
        max-height: 600px;
        width: 350px;
        overflow: auto;
    }
    .card-title{
        text-align: center;
    }
    img.card-img-top{
        max-height: 165px;
        filter: hue-rotate(2deg);
    }
    @media (max-width: 768px) {
        .card {
            max-height: 300px;
        }
    }
</style>


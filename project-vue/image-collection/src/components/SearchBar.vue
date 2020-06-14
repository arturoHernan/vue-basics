<template>
    <div>
        <h1>Type in your search term</h1>
        <form @submit.prevent="getImages">
            <input type="text" placeholder="search" v-model="query">
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            query: "space"
        }
    },
    methods: {
        getImages(query) {
            axios.get('http://localhost:3000/images?q=' + this.query)
            .then(response => {
                this.$emit('resultsUpdated', response.data);
            });
        }
    },
}
</script>

<style>

</style>
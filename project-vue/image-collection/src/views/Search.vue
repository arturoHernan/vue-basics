<template>
    <div>
        <h1>Search</h1>
        <search-bar @resultsUpdated="results = $event"></search-bar>
        <search-result :results="results"></search-result>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import SearchResult from '@/components/SearchResults.vue';

export default {
    data() {
        return {
            results: []
        }
    },
    components: {
        'search-bar': SearchBar,
        'search-result': SearchResult,
    },
}
</script>

<style>

</style>
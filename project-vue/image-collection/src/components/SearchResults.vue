<template>
<div>
    <div v-for="result in results">
        <img :src="result.links[0].href" alt="">
    </div>
</div>
  
</template>

<script>
export default {
    props: {
        results: Array
    }
}
</script>

<style>

</style>
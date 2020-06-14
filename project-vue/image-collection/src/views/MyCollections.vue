<template>
  <div>
    <h1>My Collections</h1>
    <u>
      <li @click="showModal = !showModal">New Collection</li>
      <li v-for="collection in collections">{{collection.name}}</li>
    </u>

    <modal v-if="showModal">
      <h3 slot="header">Add Collection</h3>
      <div slot="body">
        <form action="">
          <label for="collection-name">Collection Name: </label>
          <input type="text" placeholder="Collection Name" v-model="collectionName">
        </form>
      </div>
      <div slot="footer">
        <button @click="addNewCollection">Create Collection</button>
        <button @click="showModal = false">Close</button>
      </div>
    </modal>
  </div>

</template>

<script>
import axios from 'axios';
import modal from '../components/modals/ModalAddCollection.vue';

export default {
  name: 'mycollections-cmp',
  components: {
    modal: modal,
  },
  data() {
    return {
      collections: [],
      collectionName: '',
      showModal: false
    }
  },
  methods: {
    getCollections() {
      axios.get('http://localhost:3000/collection')
      .then(response => {
          this.collections = response.data
      });
    },
    addNewCollection() {
      axios.post('http://localhost:3000/collection', {
        'name': this.collectionName,
        'resources': []
      }).then(response => {
        if(response.statusText == 'Created'){
          this.showModal = false;
          this.getCollections();
        }
      });
    }
  },
  created() {
    this.getCollections();
  }
}
</script>

<style>

</style>